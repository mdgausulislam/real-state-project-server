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

module.exports = app;