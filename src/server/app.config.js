'use strict';

module.exports = function () {
    var config = {
        /* Database Config */
        //db: 'mongodb://admin:password@localhost:27017/addressbook' // local DB
        //db: 'mongodb://admin:passw0rd@ds159497.mlab.com:59497/addressbook' // Mongo Lab
        db: 'mongodb://admin:AHUCQSZXZXVVTWDL@sl-us-dal-9-portal.4.dblayer.com:17447,sl-us-dal-9-portal.3.dblayer.com:17447/admin?ssl=true'
    };

    return config;
};