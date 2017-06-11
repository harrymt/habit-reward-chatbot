
//
// File to run all the tests
//

(function () {
  'use strict';

  // Start the chatbot server and run an initial test
  const botServer = require('../index');

  require('./basic')(isError => {
    if (isError) {
      throw new Error('Test basic failed.');
    }
    testMessageHello(); // Should be the first test
  });

  function testMessageHello() {
    require('./message-hello')(isError => {
      if (isError) {
        throw new Error('Test message hello failed.');
      }
      testChooseHabit(); // Should be the next test
    });
  }

  function testChooseHabit() {
    require('./choose-habit')(isError => {
      if (isError) {
        throw new Error('Test choose habit failed.');
      }
      testChooseTime();
    });
  }

  function testChooseTime() {
    require('./choose-time')(isError => {
      if (isError) {
        throw new Error('Test choose time failed.');
      }
      testChooseModality();
    });
  }

  function testChooseModality() {
    require('./choose-modality')(isError => {
      if (isError) {
        throw new Error('Test choose modality failed.');
      }
      testEnd();
    });
  }

  function testEnd() {
    const timeout = 5;
    console.log('Finished processing tests...waiting ' + timeout + 's for promises...');
    setTimeout(() => {
      botServer.shutdown();
    }, timeout * 1000);
  }
})();
