'use strict';

const express require('express ');

// Constants

cont PORT = 8081;
const HOST = '0.0.0.0';

//App

const app = express (); 
app.get ('/', (req, res) =>{

  res.send('Hello World');

});

app.listen(PORT, HOST);

console.log('Server running on http://${HOST}: {PORT}');
