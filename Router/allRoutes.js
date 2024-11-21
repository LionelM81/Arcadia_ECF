import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/savane", "la savane", "/pages/savane.html"),
    new Route("/jungle", "la jungle", "/pages/jungle.html"),
    new Route("/marais", "le marais", "/pages/marais.html"),
    new Route("/service", "Services", "/pages/service.html"),
    new Route("/signin", "Connexion", "/pages/signin.html", "/js/auth/signin.js"),
    new Route("/contact", "Contact", "/pages/contact.html"),

];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";