import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();

app.use(bodyParser.json({limit:'300mb' , extended:true}))
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }));
app.use(cors);
const PORT = 5000;
const dataBaseConnection ="mongodb+srv://faryadazim:faryadazim123@cluster0.j1wpv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dataBaseConnection).then(()=>console.log("Connected")).catch(()=>console.log("error"))













