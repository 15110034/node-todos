var configValues = require("./config.json");

module.exports = {
    getDbConnectiongString: function(){
        return `mongodb://${configValues.username}:${configValues.password}@ds117960.mlab.com:17960/node-todos21`;
    }
}
