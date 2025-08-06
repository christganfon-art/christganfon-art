importation Réagir, { créerContext, utiliserContext, utiliser l'État, utilisationEffet, utiliserRéf } de 'réagir';
importation { ChevronGauche, ChevronDroite, Étoile, Coeur, Globe, Panier, RéserverOuvrir, Utilisateurs, Étincelles, Prix, Horloge, Vérifier le cercle, Jouer, Pause, Tome2, Télécharger, Oeil, Paramètres, BarGraphique3, Paquet, TendanceUp } de 'lucide-réaction';
importation { motion, AnimerPrésence } de " mouvement de cadre ";
importation { Barre, Bar, XAxe, YAxe, Grille cartésienne, Info-bulle, RéactifContainer, Graphique de lignes, Ligne, PieChart, Tarte, Cellule } de " graphiques ";

// TYPES
interface Traduction {
  [clé: chaîne]: chaîne | Traduction;
}

interface Traductions {
  fr: Traduction;
  fr: Traduction;
  es: Traduction;
}

interface Enfant {
  nom: chaîne;
  âge: numéro;
  genre: "garçon" | " fille " | " non binaire ";
  ethnicité: chaîne;
  skinTone: chaîne;
  type de cheveux: chaîne;
