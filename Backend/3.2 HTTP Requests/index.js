import  express from "express";
const app = express();
const port = 3000;

app.get("/",(req, res)=> {
res.send("<h1>hello </h1>");
});

//Server should be able to handle "/" , "/contact","/about"
app.get("/contact",(req, res)=> {
    res.send("<h1>+8859124540 </h1>");
    });app.get("/about",(req, res)=> {
        res.send("<h1>hello , my name is ash </h1>");
        });
app.listen(port , ()=>{
    console.log(`server running on port ${port}`);

});
