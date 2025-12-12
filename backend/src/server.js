import app from './app.js'

const start = async () => {
  try {
    await app.listen({ port: 4000, host: '0.0.0.0' });
    console.log('Server running...');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
