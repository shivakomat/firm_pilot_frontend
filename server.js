const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/skote-angular-vertical'));

app.get('/*', function(req, res) {
  // Send the index.html file for all routes to support Angular routing
  res.sendFile(path.join(__dirname + '/dist/skote-angular-vertical/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
