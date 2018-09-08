var twilio = require('twilio');

var accountSid = 'ACa1c38a45563050f73116e18cc59d75de'; // Your Account SID from www.twilio.com/console
var authToken = 'd16f5dd69243fa3eec2bbb6d680b1fbc';   // Your Auth Token from www.twilio.com/console

// var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


export function textAlert(phoneNumber) {
    client.messages.create({
        body: 'Hello from Node',
        to: phoneNumber,  // Text this number
        from: '+9737989640' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}

// module.exports = textAlert