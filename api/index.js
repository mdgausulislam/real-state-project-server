
const port = process.env.PORT || 5000;
const app = require('./app');
const connectDatabase = require('./config/db');


app.listen(port, async () => {
    console.log(`real-state server running port: ${port}`);
    await connectDatabase();
})