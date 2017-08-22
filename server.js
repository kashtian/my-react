const path = require('path');
const express = require('express');

const { port } = require('./config/sys.config');

const app = express();
app.use(express.static('public'));

if (process.argv.includes('--development')) {
    require('./build/setup-dev-server')(app);
} else {
    app.use('/', express.static(path.join(process.cwd(), 'dist')));
}

app.listen(port, () => {
    console.log(`==> Listening at http://localhost:${port}`)
})