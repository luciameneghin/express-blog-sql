const express = require('express');
const app = express();
const port = 3000;

const blogsRouter = require('./routes/blogsRouters')

//middleware import
const errorsHandler = require('./middlewares/errorsHandler')
const notFound = require('./middlewares/notFound')


app.use(express.json())


//rotte blog
app.use('/posts', blogsRouter)


//rotta server
app.use('/', (req, res) => {
  res.send('server blog');
})

//middlewares
app.use(errorsHandler)
app.use(notFound)

//porta in ascolto
app.listen(port, () => {
  console.log(`porta in ascolto: ${port}`);
})