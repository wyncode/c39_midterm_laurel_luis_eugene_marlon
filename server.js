if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/search', async (request,response) => {
const { search } = request.query    
const { data } = await axios.get(`https://itunes.apple.com/search?term=${search}&entity=album`);    
response.json(data); 
// console.log(data);
});

app.get('/album/:id', async (req, res) => {
  const {id} = req.params
const {data} = await axios.get(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
res.json(data)

})
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
