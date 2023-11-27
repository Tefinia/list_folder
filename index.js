const fs = require('fs');

// Chemin du répertoire que vous souhaitez lister
const cheminDuRepertoire = '/home/tefi/Vidéos/';

// Utiliser la fonction readdir pour lire le contenu du répertoire
fs.readdir(cheminDuRepertoire, (erreur, fichiers) => {
  if (erreur) {
    console.error('Erreur lors de la lecture du répertoire :', erreur);
    return;
  }

  // Fichiers contient maintenant la liste des fichiers/dossiers
  console.log('Contenu du répertoire :');
  fichiers.forEach((fichier) => {
    console.log(fichier);
  });
});
