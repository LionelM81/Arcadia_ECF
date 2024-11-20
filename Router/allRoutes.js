import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/savane", "la savane", "/pages/savane.html"),
    new Route("/jungle", "la jungle", "/pages/jungle.html"),

];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";