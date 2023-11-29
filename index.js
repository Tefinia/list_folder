const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const fichiers = [ ];

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

// affichage du chemin
app.post('/path', (req, res) => {
  let chemin = req.body.path;

  fs.readdir(chemin, (erreur, fichiers) => {
    if (erreur) {
      msg = "Erreur lors de la lecture du répertoire";
      fichiers = [ ];
      res.render('list', {fichiers: fichiers});
      return;
    }
    // Fichiers contient maintenant la liste des fichiers/dossiers
    res.render('list', {fichiers, chemin:chemin});
  });
  
});

app.get('/', (req, res) => {
  res.render('list', {fichiers: fichiers});
})

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});