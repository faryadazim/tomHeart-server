import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import dbConnection from './DataBase/dbConnection.js';
import router from './routes/post.js'


const app = express();
const port = 5001;
dbConnection();
app.use(bodyParser.json({ limit: "3mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "3mb", extended: true }));
app.use(cors()) 

app.get("/", (req, res) => {
  res.send("Hello World from Server!");
});
app.use("/posts", router);


app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`);
 });
