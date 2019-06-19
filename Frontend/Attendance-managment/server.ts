import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import {join} from 'path';



// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
export const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');
const userFiles = './user_upload/';
const userdataFile = './user_upload/user_data/';
const fs = require('fs');
const listFiles = (callBack) => {
 return fs.readdir('./user_upload', callBack);
};
// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
 bootstrap: AppServerModuleNgFactory,
 providers: [
   provideModuleMap(LAZY_MODULE_MAP),
   {provide: 'LIST_FILES', useValue: listFiles}
 ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);
app.use(bodyParser.json({limit: '50mb'}));
app.put('/files', (req, res) => {
 const file = req.body;
 const base64data = file.content.replace(/^data:.*,/, '');
 fs.writeFile(userFiles + file.name, base64data, 'base64', (err) => {
   if (err) {
     console.log(err);
     res.sendStatus(500);
   } else {
     res.set('Location', userFiles + file.name);
     res.status(200);
     res.send(file);
   }
 });
});
app.put('/user_upload', (req, res) => {
 const file = req.body;
 const base64data = file.content.replace(/^data:.*,/, '');
 fs.writeFile(userdataFile + file.name, base64data, 'base64', (err) => {
   if (err) {
     console.log(err);
     res.sendStatus(500);
   } else {
     res.set('Location', userdataFile + file.name);
     res.status(200);
     res.send(file);
   }
 });
});

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

app.delete('/files/**', (req, res) => {
 const fileName = req.url.substring(7).replace(/%20/g, ' ');
 fs.unlink(userFiles + fileName, (err) => {
   if (err) {
     console.log(err);
     res.sendStatus(500);
   } else {
     res.status(204);
     res.send({});
   }
 });
});
