var shell = require('shelljs');
shell.exec('node -e "console.log(\'open browser at http://localhost:8081/vr/\\n\\n\');"', { async: true });
shell.exec('nodemon server/app.js', { async: true });
shell.exec('node node_modules/react-native/local-cli/cli.js start', { async: true });