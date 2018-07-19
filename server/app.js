const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 9000);

app.use(express.static(path.join(__dirname, '../vr/')));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log(`Server listening on port ${app.get('port')}`);
}
