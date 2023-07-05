const express=require("express");
const app=express();
const db=require("./db/dbConnect");

const authRouter=require("./routes/authRoute");
const newsRouter=require("./routes/newsRoute");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/user",authRouter);
app.use("/news",newsRouter);

app.listen(3000,()=>{
    console.log("listening to port 3000....")
})