const client = require('../lib/client');

run();

async function run() {

  try {
    await client.connect();
    
    await client.query(`
      DROP TABLE IF EXISTS images
     `);
    console.log('Drop tables complete! 🔥');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }    
}
