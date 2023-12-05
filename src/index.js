const app = require("./app");
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`real-state server running port: ${port}`);
})