module.exports = {

    keepDays:       30,
    writeInterval:  '3s',
    writeBuffer:    64*1024,
    applicationLog: false,
    serverLog:      true, 
    files:          [

        'access',
        'error',
        'debug',
        'slow',
        'server',
        'node',
        'cluster',
        'cloud',
        'warning'
    ],
    stdout:         [

        'access',
        'error',
        'debug',
        'warning'
    ]
};
