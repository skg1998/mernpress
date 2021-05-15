const nodemailer = require('nodemailer');
const Email = require('email-templates');

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_FROM,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    accessToken: process.env.EMAIL_ACCESS_TOKEN,
    expires: process.env.EMAIL_EXPIRES
  }
});

const email = new Email({
  message: {
    from: process.env.EMAIL_FROM
  },
  send: true,
  views: {
    options: {
      extension: 'jade'
    }
  },
  transport: transporter
});

function sendEmail(status, order) {
  const items = order.items.slice(0,-2).map(o => {
    o.amount = (o.amount/100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return o;
  });
  const time = new Date(order.status_transitions.paid * 1000);
  email
    .send({
      template: status,
      message: {
        to: order.email,
      },
      locals: {
        order: order,
        order_id: order.id.split("_")[1],
        order_total: (order.amount/100).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        order_date: `${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`,
        items: items,
        config: config
      }
    })
    .then(console.log)
    .catch(console.error);
}

module.exports = {sendEmail}


