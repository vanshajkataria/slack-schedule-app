const bulkMessageCallback = async ({ body, ack, client, logger }) => {
  try {
    await ack();
    logger.info(body);
    // const { trigger_id } = shortcut;
    const modal1 = await client.views.open({
      trigger_id: body.trigger_id,
      view: {
        type: "modal",
        callback_id: "message_modal",
        title: {
          type: "plain_text",
          text: "Schedule Message",
          emoji: true,
        },
        submit: {
          type: "plain_text",
          text: "Next",
          emoji: true,
        },
        close: {
          type: "plain_text",
          text: "Cancel",
          emoji: true,
        },
        blocks: [
          {
            type: "context",
            elements: [
              {
                type: "plain_text",
                text: "Step 1 of 2",
                emoji: true,
              },
            ],
          },
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: "You can personalize your message using the following substitution:\n*{fullName}, {firstName}, {lastName}*",
              },
            ],
          },
          {
            type: "input",
            block_id: "message_block",
            element: {
              type: "plain_text_input",
              multiline: true,
              action_id: "message_input",
            },
            label: {
              type: "plain_text",
              text: "📝 Write your message",
              emoji: true,
            },
          },
          {
            block_id: "channel_block",
            type: "input",
            label: {
              type: "plain_text",
              text: "👥 Recepients",
            },
            element: {
              type: "conversations_select",
              action_id: "conversation_dropdown",
            },
          }
        ],
      },
    });
    logger.info(modal1);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { bulkMessageCallback };
