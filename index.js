import express from 'express';
import {initApp} from './src/module/AppRouter.js';
const app = express();

initApp(app);

app.listen(4000,()=>{
    console.log('server is running ..... 4000');
    });