const { sampleViewCallback } = require('./sample-view');
const { modalChangeCallback } = require('./modal-change');
const { messageScheduleCallback } = require('./message-schedule')

module.exports.register = (app) => {
  app.view('sample_view_id', sampleViewCallback);
  app.view('message_modal', modalChangeCallback);
  app.view('config_modal', messageScheduleCallback);
};
