// Panier vide au départ
let panier = [];
let total = 0;

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  total += prix;
  afficherPanier();
}

// Fonction pour afficher le panier à l'écran
function afficherPanier() {
  const liste = document.getElementById("liste-panier");
  liste.innerHTML = ""; // Vider la liste avant de la remplir

  // Créer un élément pour chaque produit dans le panier
  panier.forEach((article) => {
    const item = document.createElement("li");
    item.textContent = ${article.nom} - ${article.prix} DT;
    liste.appendChild(item);
  });

  // Mettre à jour le total
  document.getElementById("total").textContent = total;
}