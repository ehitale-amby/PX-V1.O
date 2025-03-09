const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "6PoGUaQT#X-RHjZj72wxRKMs4nP7ncg5zPJZGn9Nmv-jB4V1kG1I",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.https://ibb.co/4ZZ3grpk",
ALIVE_MSG: process.env.ALIVE_MSG || "Chill! I'm alive😼",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
