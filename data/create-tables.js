const client = require('../lib/client');

run();

async function run() {
  
  try {

    await client.connect();

    await client.query(`
      CREATE TABLE images (
        id SERIAL PRIMARY KEY,
        url VARCHAR(256) NOT NULL,
        last_modified VARCHAR(256),
        foamy BOOLEAN
      )
        `);

    console.log('Create tables complete! 🛢');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
}
