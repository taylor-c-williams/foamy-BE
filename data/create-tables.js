const client = require('../lib/client');

run();

async function run() {
  
  try {

    await client.connect();

    await client.query(`
      CREATE TABLE IMAGES
        `);

    console.log('create tables complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
}
