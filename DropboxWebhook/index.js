module.exports = function (context, req) {
    let challenge = req.query['challenge'];

    if (challenge) {
        context.log(`Got a challenge call: ${challenge}`);

        res = {
            body: challenge,
            headers: {
                'Content-Type': 'text/plain'
            }
        };
    }
    else {
        context.log('Got a regular call');

        res = {
            status: 200,
            body: "got a regular call",
            headers: {
                'Content-Type': 'text/plain'
            }
        };
    }
    context.done(null, res);
};