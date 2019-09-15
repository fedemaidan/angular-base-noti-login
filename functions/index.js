const functions = require('firebase-functions');
const admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");

exports.send_notification = functions.https.onRequest((request, response) => {
    var registrationToken = request.query.token;
    console.log("Tengo token " + registrationToken)
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      
    
    var message = {
          "token": registrationToken,
          "notification":{
            "title":"Portugal vs. Denmark",
            "body":"great match!"
          }
      }
      console.log("Tengo mensaje " + message)
    // Send a message to the device corresponding to the provided
    // registration token.
    let algo = admin.messaging().send(message).then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
        return "aa"
    }).catch((error) => {
        console.log('Error sending message:', error);
        return "aa"
    });

    response.json({success: true})
});
