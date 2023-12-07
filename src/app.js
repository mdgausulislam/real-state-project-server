const express = require('express');
const cors = require('cors');
const router = require('./routers/userRouter');
const authRouter = require('./routers/authRoutes');

const app = express();


//middleware
app.use(cors());
app.use(express.json());


app.use('/api/user', router)
app.use('/api/auth', authRouter)

app.get('/', (req, res) => {
    res.send('Server is running for the real state project')
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internel server error";
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message,
    })
})

module.exports = app;