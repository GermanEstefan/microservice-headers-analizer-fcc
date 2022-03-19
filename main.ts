import express from 'express';
import { config } from 'dotenv';
config();

const expressApp = express();
const PORT = process.env.PORT;

expressApp.use(express.static('public'));

expressApp.get('/api/whoami', (req, res) => {
    console.log(req.ip);
    return res.json({
        ipadress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    })
})

expressApp.listen(PORT, () => console.log('Server is running in the port ', PORT));