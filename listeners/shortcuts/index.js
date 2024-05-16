const { sampleShortcutCallback } = require('./sample-shortcut');
const { bulkMessageCallback } = require('./bulk-message');

module.exports.register = (app) => {
  app.shortcut('sample_shortcut_id', sampleShortcutCallback);
  app.shortcut('send_bulk_message', bulkMessageCallback);
};
