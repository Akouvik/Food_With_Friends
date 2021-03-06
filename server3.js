const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/*', express.static(__dirname));

app.post('/login', (req, res) => {
  // send to db

  // set cookie

  // set session
  res.send("Logged In");
});

app.get('/sign-up', (req,res) => {
  res.sendFile(path.join(__dirname + '/views/sign-up.html'));
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
