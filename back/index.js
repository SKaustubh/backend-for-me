require('dotenv').config();

const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
    res.send("kaustubhh")

})
app.get('/insta', (req, res) => {
    res.send("kaustubhh")

})

app.get( '/login', (req, res) => {
  res.send('<h1> please login at my page </h1>')
})


// get a list of 10 jokes
 
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'a joke',
      content: 'my life'
    },
   
    {
      id: 2,
      title: 'another joke',
      content: 'this is another joke'
    },
    {
      id: 3,
      title: 'another joke',
      content: 'this is another joke'
    },
    {
      id: 4,
      title: 'another joke',
      content: 'this is another joke'
    },
    {
      id: 5,
      title: 'another joke',
      content: 'this is another joke'
    },
    {
      id: 6,
      title: 'another joke',
      content: 'this is another joke'
    },
    {
      id: 7,
      title: 'another joke',
      content: 'this is another joke'
    },
    {
      id: 8,
      title: 'another joke',
      content: 'this is another joke'
    },
    {
      id: 9,
      title: 'another joke',
      content: 'this is another joke'
    },
    {
      id: 10,
      title: 'another joke',
      content: 'this is another joke'
    },
  ];
  res.send(jokes)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})