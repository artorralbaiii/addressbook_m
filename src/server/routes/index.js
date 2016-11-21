module.exports = function (app) {
    // User Endpoints
    require('../user/user.routes')(app);
}