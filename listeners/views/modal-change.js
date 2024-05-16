const modalChangeCallback = async ({ ack, body }) => {
  try {
    const message = body.view.state.values.message_block.message_input.value;
    const channel = body.view.state.values.channel_block.conversation_dropdown.selected_conversation;
    await ack({
      response_action: "update",
      view: {
        type: "modal",
        callback_id: "config_modal",
        title: {
          type: "plain_text",
          text: "Schedule Message",
          emoji: true,
        },
        submit: {
          type: "plain_text",
          text: "Schedule",
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
          },
          {
            type: "context",
            elements: [
              {
                type: "plain_text",
                text: "Step 2 of 2",
                emoji: true,
              },
            ],
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Configurations*",
            },
          },
          {
            type: "context",
            elements: [
              {
                type: "plain_text",
                text: "Set the date and time in past if you want to send message immediately.",
                emoji: true,
              },
            ],
          },
          {
            type: "input",
            block_id: "date_time_block",
            element: {
              type: "datetimepicker",
              action_id: "datetimepicker",
            },
            label: {
              type: "plain_text",
              text: "Select Date and Time",
              emoji: true,
            },
          },
        ],
      },
    });

    // logger.info(body);
    // const modal2 = await client.views.update({
    //   view_id: body.view.id,
    //   hash: body.view.hash,
    //   view: {
    //     type: "modal",
    //     callback_id: "modal2_callback",
    //     title: {
    //       type: "plain_text",
    //       text: "Schedule Message",
    //       emoji: true,
    //     },
    //     submit: {
    //       type: "plain_text",
    //       text: "Submit",
    //       emoji: true,
    //     },
    //     close: {
    //       type: "plain_text",
    //       text: "Cancel",
    //       emoji: true,
    //     },
    //     blocks: [
    //       {
    //         type: "header",
    //         block_id: "modal_output",
    //         text: {
    //           type: "plain_text",
    //           text: "output",
    //           emoji: true,
    //         },
    //       },
    //     ],
    //   },
    // });
    // logger.info(modal2);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { modalChangeCallback };
