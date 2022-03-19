"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const expressApp = (0, express_1.default)();
const PORT = process.env.PORT;
expressApp.use(express_1.default.static('public'));
expressApp.get('/api/whoami', (req, res) => {
    console.log(req.ip);
    return res.json({
        ipadress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
});
expressApp.listen(PORT, () => console.log('Server is running in the port ', PORT));
