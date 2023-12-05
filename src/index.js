const app = require("./app");
const connectDatabase = require("./config/db");
const port = process.env.PORT || 5000;

app.listen(port, async() => {
    console.log(`real-state server running port: ${port}`);
    await connectDatabase();
})