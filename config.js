const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU226rOBT9F7+SnnBLgEiVhktCCLlDQpLR0cgBhxgIUNuQ0Kr/fkTTqn2Yc6bDk2XjtZfXWnu/gLzAFLmoAYMXUBJcQ4baJWtKBAbAqE4nREAHRJBBMABDfbrMUivgz04Y8IJU9nUuUhancBKNFyzYPAk0uV6N7VLYPILXDiirY4bDPwDKN23YLHYV3Lh6Gc26J6trOJrlHctgyInJ7kClBefJdLtqAVtEiAnO42F5RhdEYOaiZgkx+R59VXfnuKcmKxurz5vNftisSK5OYbfrnNMeu3lX6B/PzZ7P9O/Rn9i+HvpRGFujIepGtjaea3W/drygicViJJ4ayS23V+fZonf6FMc5ipwI5Qyz5tu6c0YvPjOs6bLaH0Y07UqcNJX0bXjjIm6mn5+fNG93YnWUXb9HPFncGsVPEvlgLrP5YWcVhyBf88OwMUTdmeMgZ7G7IXPVD78SX5KPrKT/R3fe1hOa5qI38tieaKnhbtlFUvaectZnh3GyKKYsvWFxvKXfo891R9tMWB68Wd/qhS5nXqb6nFcdQtMnX15y/Z7KNA0K+m74SR+yivyJpan7vdq08+awgmJ1O4fTZb2wJ+TiV4EIx2qqW2tnPR9V84sVhJ4qU32vBTA2N1vBlMpwvM7X9OywPYaSZpRFL/fGyfXx7UUpapwIDITXDiAoxpQRyHCRt3t9rQNgVHsoJIi9qQtUmIzIbeIPj8mErzNtXXO6MHMvZ0nwb1E/c2xlur8mDB43j6ADSlKEiFIUjTFlBWlmiFIYIwoGf//sgBzd2N23tpokdsAJE8o2eVVmBYw+TP04hGFYVDnzmjw02wUiYMB/biPGcB7TVsYqhyQ84xqZZ8goGJxgRtFrB0SoxiFq8UDdPCnQn6N1YarXScnks/HPYtVSPhf5/Zee1g+PvHJ64HshfJD7Av+g9o7yg3RUlZMKBU3SItAB+L1l2ju/dRBXt2nqus+3jTaVxb7Bx6unobZI9iR9c+EuPSIoAgNGKtQBRximVekXKcr/gFus55FLfXU8c8VneXZYcNHkODEPy+fhF9y7pWDw8jmmzCJq8QRlubbXngw64PKWQNy+XFT6Wk8VeqooDQTxL/rj2uoIy/JHjlgL+655eyFCDOKMtimd7ny+cOyhWzvSkbdtPY11M9bBp0cfWb+HSYdr3UIZUXMxKCMySZ5SNxsjpzhuI6sfYmMmLFccTQOBPv4LCBiAqyF5TQSjSKSXwjP3u9zgyUhUtxLeEZurr3uIVbJYucYlpUadinsj8BQo4pl1sDRlatdasxPzWGWJ7MT71OnhvhE/ttXuWflabHqsbOWZHqzsKsQltzNkL6hcd7GvgxFXnyL1JCqVPdHmfq6NZsmOOwZjI1RnitENTb8/FuZNGa9TKzCn+cVc94anvZ7E9y58mwLZ+/TFbw3y8p6sE0ZvwyyHrUP/4c3XjPOvnS8Q79PxNzkyVna60qUSdida9rSDzb5fmuVawq4t7FZc7sT+3OeXZDJiR/D6+rMDygyyU0EuYABgHpECt72QQcr0zzb18QVRBi8lGAiKzPOKoGlyB1wavSw9BtlHdwO9/SxVAq+/AAvgMKL4BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "⁨𝙄𝘾𝙃𝙄𝙂𝙊☾⁩ -(5PHESIHLE)",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 𝙄𝘾𝙃𝙄𝙂𝙊☾⁩ -(5PHESIHLE',27695815823",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || '𝙂𝙀𝙏𝙎𝙐𝙂𝘼 𝙏𝙀𝙉𝙎𝙃𝙊𝙐',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/va51uv.mp4',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

