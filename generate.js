module.exports = function(){
    var faker = require("faker");
    var _= require("lodash");

    return {
        motorcycles: _.times(100, function (n){
            return {
                id: n,
                name: faker.vehicle.model()
            }
        })
    }
}