// const http = require("http");
// const data = require("./utils/data")

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const {url} = req;
    
//     if(url.includes("rickandmorty/character/")) {
//         const id = parseInt(url.split("/").at(-1), 10);
//         const character = data.find((char) => char.id === id);
//         console.log(character);

//         if(character){
//         res.writeHead(200, {"Content-Type": "application/json"});
//         return res.end(JSON.stringify(character));
//         } else {
//             res.writeHead(404, {"Content-Type": "application/json"});
//             return res.end(JSON.stringify({"error": "Character not found"}))
//         }
        




//         // res.end(`Estoy en la ruta con el id ${id}`);
//     }

// }).listen(3001, "localhost");


//-----------------------------------------------------------


// const http = require("http");
// const getCharById = require("./controllers/getCharById");

// http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   const { url } = req;

//   if (url.includes("/rickandmorty/character")) {
//     const id = parseInt(url.split("/").pop(), 10);
//     getCharById(res, id);
//   }
// }).listen(3001, "localhost");



const app = require('./app');
const PORT = 3001;

app.listen(PORT, () => {
  console.log('Server raised in port ' + PORT);
});