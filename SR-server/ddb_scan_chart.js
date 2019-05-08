
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
    TableName: "temperature",
    ProjectionExpression: "#timestamp, humidity, temperature",
    ExpressionAttributeNames: {
        "#timestamp": "timestamp",
    }
};

console.log("Scanning table...");
docClient.scan(params, onScan);

const fs = require('fs');
let total = [];

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        data.Items.forEach(function(item) {
            let item_table = {
                time: item.timestamp,
                humid: item.humidity,
                temp: item.temperature,
            };
            // let food_data = JSON.stringify(food_table);
            total.push(item_table);

            // console.log(
            //     data
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
        fs.writeFileSync('../SR-app/dev/json/THRecord.json', list_data);
        fs.writeFileSync('./json/THRecord.json', list_data);
        fs.writeFileSync('./public/json/THRecord.json', list_data);

        // continue scanning if we have more movies, because
        // scan can retrieve a maximum of 1MB of data
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }

    }
}