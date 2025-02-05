const express = require('express');
const app = express();
const port = 3000;

const blogsRouter = require('./routes/blogsRouters')

//middleware
const checkData = require('./middlewares/checkData')
const errorsHandler = require('./middlewares/errorsHandler')
const notFound = require('./middlewares/notFound')


app.use(express.json())

//rotta server
app.use('/', (req, res) => {
  res.send('server blog');
})
//rotte blog
app.use('/blog', blogsRouter)

//middlewares
app.use(errorsHandler)
app.use(notFound)

//porta in ascolto
app.listen(port, () => {
  console.log(`porta in ascolto: ${port}`);
})