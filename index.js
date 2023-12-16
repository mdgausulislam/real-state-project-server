
const port = process.env.PORT || 5000;
const app = require('./api/app');
const connectDatabase = require('./api/config/db');


app.listen(port, async () => {
    console.log(`real-state server running port: ${port}`);
    await connectDatabase();
})