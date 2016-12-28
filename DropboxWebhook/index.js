module.exports = function (context, req) {
    let challenge = req.query['challenge'];

    if (challenge) {
        context.log('Got a challenge call');
        res = {
            body: challenge
        };
    }
    else {
        context.log('Got a regular call');
        res = {
            status: 200,
            body: "got a regular call"
        };
    }
    context.done(null, res);
};