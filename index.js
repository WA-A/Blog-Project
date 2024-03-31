import express from 'express';
import {initApp} from './src/module/AppRouter.js';
const app = express();
const PORT = process.env.PORT || 4000;
initApp(app,express);

app.listen(PORT,()=>{
    console.log(`server is running ..... ${PORT}`);
    });