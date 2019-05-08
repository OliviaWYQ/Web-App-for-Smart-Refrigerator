var request = require('request');
const fs = require('fs');

module.exports.log = function (food) {
  // console.log(food);

  function unique(array) {
      var res = [];
      for (var i = 0, len = array.length; i < len; i++) {
          var current = array[i];
          if (res.indexOf(current) === -1) {
              res.push(current);
          }
      }
      return res;
  }

  let items = unique(food);
  console.log(items);
  index_1 = Math.floor(Math.random() * items.length);
  let item_1 = items[index_1];
  items.splice(index_1, 1);
  console.log(items);

  if (items.length > 0) {
    index_2 = Math.floor(Math.random() * items.length);
    item_2 = items[index_2];
    combine = item_1 + '+' + item_2;
  } else {
    combine = item_1;
  }
  
  console.log(combine);

  // let data = {};

  // console.log(data.hits);

  request("https://api.edamam.com/search?q=" + combine + "&app_id=058d00ed&app_key=86ae03cf206be898b363a87b561a963f&from=0&to=3&calories=591-722&health=alcohol-free", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // let data = JSON.stringify(body);

      data = JSON.parse(body);
      console.log(data.more);
      // console.log(body);

      if (data != [] && data.more == true) {
        fs.writeFileSync('../SR-app/dev/json/recipe.json', body);
        fs.writeFileSync('../SR-app/src/json/recipe.json', body);
        fs.writeFileSync('./json/recipe.json', body);
        fs.writeFileSync('./public/json/recipe.json', body);
      }
      // console.log(body) // Show the HTML for the Google homepage. 
    } else {
      console.log("Error " + response.statusCode)
    }
  });
};

