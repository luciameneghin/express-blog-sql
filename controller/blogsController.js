//importo connessione al db
const connection = require('../data/db')

const index = (req, res) => {
  res.send('elenco pizze')
}

const show = (req, res) => {
  res.send(`dettaglio pizza ${id}`)
}

module.exports = {
  index, show
}