const express = require('express');
const app = express();
const port = 8900;
const

app.get('/', (req,res) => {
    res.status(200).send('This is my Homepage')
})



app.listen(port,(err)=> {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})