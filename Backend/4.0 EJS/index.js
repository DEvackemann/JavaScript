import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();

  // console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("soltion.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});


// var day=new Date();  
// document.writeln(day.getDay());  


// create new folderr called 4.0 EJS
// initialise the NPM  [ npm  init -y }and install the Express and EJS [npm i express and EJS]
// goto package change ths type :module
//mkdir views; touch index.js views/index.ejs 
//create file index.js and views/index.ejs
// use js getday()method to build a website that give advice based on day of week 
