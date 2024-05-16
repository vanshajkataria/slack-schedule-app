const messageScheduleCallback = async ({ ack, body, view, client, logger, message }) => {
  await ack();
  try {
    logger.info(body);
    const message = body.view.state.values.message_block.message_input.value;
    const channel = body.view.state.values.channel_block.conversation_dropdown.selected_conversation;
    const selectedDateTime = body.view.state.values.date_time_block.datetimepicker.selected_date_time;
    await client.chat.scheduleMessage({
      channel: `${channel}`,
      text: `${message}`,
      post_at: `${selectedDateTime}`
    })
  } catch (error) {
    console.log(error);
  }
};

module.exports = { messageScheduleCallback };
