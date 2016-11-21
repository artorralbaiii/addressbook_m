'use strict';

module.exports = function (express) {
    
    var api = express.Router();
    
    // User Endpoints
    require('../user/user.routes')(api);

    return api;
};