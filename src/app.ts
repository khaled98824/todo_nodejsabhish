import express , {Request , Response} from "express"
import  mongoose  from "mongoose";
const router = require('../routes/routes');
import dotenv from 'dotenv';


//import {mongoDBConnection} from "./database/data";
//import {postDataToMongo} from "./database/data";
const app = express();

dotenv.config();
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URL as string,
    {
       useUnifiedTopology:true,
       useNewUrlParser:true,
    },
    ()=>{
        console.log('DB Connected !!');
    }
);
app.use('/', router);

app.listen(8080, ()=>{
    console.log('Server is at 8080');
});