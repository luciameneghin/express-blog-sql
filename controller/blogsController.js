//importo connessione al db
const { compileFunction } = require('vm');
const connection = require('../data/db.js');

const index = (req, res) => {
  const sql = 'SELECT * FROM posts';

  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Errore nella query del database', err });
    }
    console.log(req.body);
    res.json(results);
  });
};


const show = (req, res) => {
  const id = req.params.id;
  res.send(`creo post nel blog ${id}`);
}


const store = (req, res) => {
  res.send('creo post nel blog')
}

const update = (req, res) => {
  const id = req.params.id;
  res.send(`modifico post del blog ${id}`)
}

const modify = (req, res) => {
  const id = req.params.id;
  res.send(`modifico post del blog ${id}`)
}


const destroy = (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM posts WHERE id = ?';
  connection.query(sql, [id], (e) => {
    if (e) return res.status(500).json({ error: 'post non eliminato' });
    res.sendStatus(204)
  })
}


module.exports = {
  index, show, store, update, modify, destroy
}