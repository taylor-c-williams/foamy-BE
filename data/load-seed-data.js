const client = require('../lib/client');


run();

async function run() {

  try {
    await client.connect();

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }    
}
