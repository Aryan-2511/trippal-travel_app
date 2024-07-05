const admin = require('firebase-admin');
const serviceAccount = require('../../../nifty-linker-426317-p6-7c2bdfda06c1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
