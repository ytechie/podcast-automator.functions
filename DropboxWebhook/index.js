module.exports = function (context, req) {
    let challenge = req.query['challenge'];

    if (challenge) {
        context.log(`Got a challenge call: ${challenge}`);

        res = {
            body: challenge,
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            }
        };
    }
    else {
        context.log('Got a regular call');

        res = {
            status: 200,
            body: "got a regular call",
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            }
        };
    }
    context.done(null, res);
};