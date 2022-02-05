import mongoose from 'mongoose'


const dbConnection = async ()=>{
  try {
    await mongoose.connect(
      "mongodb+srv://faryadazim:faryadazim123@cluster0.j1wpv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected Succesfully');
  } catch (error) {
    console.log("error.message")}
}

export default dbConnection;