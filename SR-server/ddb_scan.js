
/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    // endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "foodRecord",
    ProjectionExpression: "#timestamp, calorie, expirationDate, imgurl, inside, label, username, weight",
    ExpressionAttributeNames: {
        "#timestamp": "timestamp",
    }
};

console.log("Scanning table...");
docClient.scan(params, onScan);

const fs = require('fs');
let total = [];

let recipe = require('./get_recipe');
let food_name = [];//'chicken', 'egg', 'tomato'];

global.globalList = null;

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        // debugger;
        data.Items.forEach(function(food) {

            if (food.inside) {
                let food_table = {
                    name: food.label,
                    inside: food.inside,
                    start: food.timestamp,
                    end: food.expirationDate,
                    cal: food.calorie,
                    weight: food.weight,
                    url: food.imgurl,
                    username: food.username
                };
                // let food_data = JSON.stringify(food_table);'
                food_name.push(food.label);

                total.push(food_table);
            }
            // console.log(
            //     // data
            //     "label:", food.label,
            //     "inside", food.inside,
            //     "time:", food.timestamp,
            //     "expirationDate:", food.expirationDate,
            //     "calorie:", food.calorie, 
            //     "weight:",food.weight,
            //     "imgurl", food.imgurl,
            //     "username", food.username
            //     );
        });

         
        // console.log(total);
        let list = {
            "data": {
                "poilist": total
            },
            "msg": "succeed"
        }

        let list_data = JSON.stringify(list);
        global.globalList = list_data;
        console.log(globalList);
        global.globalString = "This can be accessed anywhere!";
        console.log(globalString);

        fs.writeFileSync('../SR-app/dev/json/foodRecord.json', list_data);
        fs.writeFileSync('../SR-app/src/json/foodRecord.json', list_data);
        fs.writeFileSync('./json/foodRecord.json', list_data);
        fs.writeFileSync('./public/json/foodRecord.json', list_data);

        // console.log(food_name);
        recipe.log(food_name);

        // continue scanning if we have more movies, because
        // scan can retrieve a maximum of 1MB of data
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
        // console.log('return list', list_data);
        // 
    }
}

// console.log('return list', globalList);
// module.exports = globalList;