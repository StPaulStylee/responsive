const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/responsive.html'));
});

const port = process.env.PORT || 5000;
const server = app.listen(port, function() {
  console.log('Listening on port', server.address().port);
});
