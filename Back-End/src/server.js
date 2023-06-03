const app = require('./app');
const PORT = 3001;
const { conn } = require('./DB_connection');


conn.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
  });
})

//se puede realizar de las dos formas



// conn.sync({force:true})

// app.listen(PORT, () => console.log('Server raised in port ' + PORT))