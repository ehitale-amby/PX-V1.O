const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XKgwBADQ#Ei1kq1f89kBKosBI-DVeCeTzQvb4DsxoCmN9CN9gk0w",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.https://ibb.co/4ZZ3grpk",
ALIVE_MSG: process.env.ALIVE_MSG || "Chill! I'm alive😼",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};