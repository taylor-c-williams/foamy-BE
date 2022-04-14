const client = require('../lib/client');
const imageData = require('./foam-seed');

run();

async function run() {
  try {
    await client.connect();
    await Promise.all (
      imageData.map((image) => {
        return client.query(
          `
      INSERT INTO images (url, last_modified)
      VALUES ($1, $2)
      RETURNING *
      `,
          [image.url, image.lastModified]
        );
      })
    );
    console.log('Seed data load complete! 🌱');
  } catch(err) {
    console.log(err);
  } finally {
    client.end();
  }
}
