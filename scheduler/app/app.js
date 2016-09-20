const Agenda = require('agenda');
const agenda = new Agenda({
    db: {
        address: "mongodb://mongo/agenda"
    }
});
agenda.processEvery('1 hour');

agenda.define('initializeLinesalite', function(job) {
    console.log('initializeLinesalite');

    const AWS = require('aws-sdk');
    AWS.config.update({
        accessKeyId: '000000000000',
        secretAccessKey: '000000000000',
        region: 'ap-northeast-1'
    });
    const kinesis = new AWS.Kinesis({
        endpoint: 'http://kinesalite:4567'
    });

    let params = {
        StreamName: "data"
    }

    kinesis.describeStream(params, (err, data) => {
        if (err) throw (err);
        console.log(data);
    });
});

agenda.on('ready', function() {
    agenda.now('initializeLinesalite');

    // 他のコンテナが起動するまで待っているが、もっと賢い書き方したい。。。
    setTimeout(function() {
        agenda.start();
    }, 20000);
});
