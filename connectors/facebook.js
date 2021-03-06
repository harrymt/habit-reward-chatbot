'use strict';

const request = require('request');

// Prepare request to facebook
const newRequest = request.defaults({
  uri: 'https://graph.facebook.com/v2.6/me/messages',
  method: 'POST',
  json: true,
  qs: {
    access_token: process.env.FB_PAGE_TOKEN
  },
  headers: {
    'Content-Type': 'application/json'
  }
});

const newMessage = (recipientId, msg, callback) => {
  const opts = {
    form: {
      recipient: {
        id: recipientId
      },
      message: msg
    }
  };

  newRequest(opts, (err, resp, data) => {
    if (callback) {
      if (data) {
        return callback((err || data.error) && data.error.message, data);
      }
      return callback(err, data);
    }
  });
};

const send = (fbid, reply, waitTime, callback) => {
  setTimeout(() => {
    newMessage(fbid, reply, (msg, data) => {
      if (data && data.error) {
        console.log('Error sending fb message');
        console.log(msg, data);
      }
      return callback();
    });
  }, waitTime);
};

const getMessageEntry = body => {
  const val = body.object === 'page' &&
            body.entry &&
            Array.isArray(body.entry) &&
            body.entry.length > 0 &&
            body.entry[0] &&
            body.entry[0].messaging &&
            Array.isArray(body.entry[0].messaging) &&
            body.entry[0].messaging.length > 0 &&
            body.entry[0].messaging[0];
  // If its a button postback, make it seem like a quick reply was chosen for ease
  if (val && val.postback) {
    val.message = {
      quick_reply: {
        payload: val.postback.payload
      }
    };
  }

  // If its a sticker, convert it into text
  if (val && val.message && val.message.sticker_id) {
    console.log('Sticker received: id ' + val.message.sticker_id);
    val.message.text = 'sticker_id:' + val.message.sticker_id;
  }

  return val || null;
};

module.exports = {
  send,
  getMessageEntry,
  newMessage
};
