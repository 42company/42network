const express = require('express');
const app = express();
const path = require('path');
const mandrill = require('mandrill-api/Mandrill');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/', express.static(path.resolve(__dirname, '../build')));
app.post('/contact', (req, res, next) => {
  const mandrillClient = new mandrill.Mandrill(process.env.MANDRILL_API_KEY)
  const message = {
    html: req.body.html,
    from_email: process.env.MANDRILL_ACCOUNT,
    to: [{ email: process.env.CONTACT_EMAIL }]
  }

  mandrillClient.messages.send({ message: message }, (result) => {
    console.log(result)
    res.end(JSON.stringify(result))
  }, (error) => {
    console.log(error)
    res.status(500).end(JSON.stringify({ error: error.status }))
  })
})
app.get('*', (req, res, next) => {
  if(req.path.split('/')[1] === 'static') return next();
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

module.exports = app
