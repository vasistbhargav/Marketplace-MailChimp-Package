const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        campaignId,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !campaignId) {
        _.echoBadEnd(r, to, res, 'apiKey, campaignId');
        return;
    }

    //get datacenter
    let dcarr = apiKey.split('-'),
        dc    = dcarr[dcarr.length-1] + '.';

    let options = {
        method: 'DELETE',
        url: `https://${dc}api.mailchimp.com/3.0/campaigns/${campaignId}`, 
    }

    return request(options, (err, response, body) => {
        if(!err && (response.statusCode == 204 || response.statusCode == 200)) {
            r.contextWrites[to] = 'Success';
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.parse(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
    })
    .auth(null, null, true, apiKey);
}