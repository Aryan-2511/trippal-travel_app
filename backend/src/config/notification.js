const admin = require('./firebaseAdmin');

const sendNotification = (token, message) => {
  const payload = {
    notification: {
      title: message.title,
      body: message.body,
    }
  };

  return admin.messaging().sendToDevice(token, payload)
    .then(response => {
      console.log('Successfully sent message:', response);
      return response;
    })
    .catch(error => {
      console.error('Error sending message:', error);
      throw error;
    });
};

module.exports = {
  sendNotification
};
