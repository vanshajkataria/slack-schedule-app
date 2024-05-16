const { App, LogLevel } = require('@slack/bolt');
require('dotenv').config();
const { registerListeners } = require('./listeners');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
    logLevel: LogLevel.DEBUG,
});

registerListeners(app);

(async () => {
    try {
    //   await sequelize.authenticate();
    //   await sequelize.sync({ force: true });      
    await app.start(process.env.PORT || 3000)
    console.log('Schedule Message App is running')
    } catch (error) {
      console.error('Unable to start Schedule Message App', error);
      process.exit(1);
    }
})()