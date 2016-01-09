module.exports = function(env, exchangeData) {
    'use strict';

    for (let key in exchangeData) {

        if (!exchangeData.hasOwnProperty(key) || env.hasOwnProperty(key)) {

            continue;
        }
        env[key] = exchangeData[key];
    }
}
