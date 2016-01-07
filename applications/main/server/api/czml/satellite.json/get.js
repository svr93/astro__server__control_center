module.exports = function(client, callback) {
    'use strict';

    /**
     * Used for JVM instance preloading.
     * @type {{
     *       spawnJar: function(string, Array, function(Error, EventEmitter))
     * }}
     * --performance--
     */
    var nodeNailgunServer = api.nodeNailgun.createServer();

    const ARTIFACT_PATH = 'out/artifacts/tle_converter/tle-converter.jar';
    const JAVA_PROJECT = 'military_ed__tle_to_cartesian';
    const CZML_PATH = 'applications/main/server/api/czml';

    const FULL_PATH = `${ CZML_PATH }/${ JAVA_PROJECT }/${ ARTIFACT_PATH }`;

    /**
     * Data for server response used in case of error.
     */
    class CalculationErrorData {

        /**
         * HTTP status code.
         */
        static get STATUS() {

            return 503;
        };

        constructor(description) {

            this.title = 'calculation error';
            this.description = description;
        };
    }

    nodeNailgunServer.spawnJar(FULL_PATH, [], function (error, jarProcess) {

        if (error) {

            var data = {

                error: new CalculationErrorData('jar starting error')
            };
            callback(data, CalculationErrorData.STATUS);
            return;
        }
        var readable = jarProcess.stdout;
        var data = '';

        readable.on('data', chunk => {

            data += chunk;
        });
        readable.on('end', () => {

            callback({ czmlData: JSON.parse(data) });
        });
        readable.on('error', () => {

            var data = {

                error: new CalculationErrorData('jar working error')
            };
            callback(data, CalculationErrorData.STATUS);
        });
    });
};
