require("dotenv").config();
const express = require("express");
const connect_bdd = require("./bd/connect_bdd.js");
const userRoutes = require("./router/UserRouter.js");
const serviceRoutes = require("./router/serviceRouter.js");
const avisRoutes = require("./router/avisRouter.js");
const vehiculeRoutes = require("./router/vehiculeRouter.js");
const horaireOuvertureRoutes = require("./router/horaireouvertureRouter.js");
const middleWare = require("./middlewaves/middlewaresToken.js");

const adminRoutes = require("./router/adminRoutes.js");
const employeRoutes = require("./router/EmployeRoutes.js");

// on permet au front et au back de communiquer enssemble
const cors = require("cors");
// initialisation de app pour utiliser les méthodes sur
const app = express();

// pour permettre au front de communiquer avec toutes les routes

const corOptions = {
  origin: "*",
  Credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposeHeaders: ["sessionId"],
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  preflightContinue: false,
  allowedHeaders: ["Content-Type"],
};
// si  le port  on l'utilise si il n'hexiste pas on utilise celeui ci
const port = process.env.PORT || 5001;
// pour activer le partage des ressources entre origines différentes (CORS) dans une application.
app.use(cors(corOptions));

// on permet au server d'accepter les fichiers json
app.use(express.json());

// code url  est utilisé pour configurer le framework Express afin de pouvoir analyser les données encodées en URL dans les requêtes HTTP. Cela vous permet d'accéder aux données de formulaire soumises dans les requêtes POST.

app.use(express.urlencoded({ extended: false }));

//admin routes
app.use("/api/admin", middleWare.checkAuth, adminRoutes);
app.use("/api/client", middleWare.checkAuth, employeRoutes);
// use associe une route de base a un emsemble de route
app.use("/api/user", userRoutes);
app.use("/api/service", serviceRoutes);
// séécurisation de la route avis avec le middleware
app.use("/api/avis", middleWare.checkAuth, avisRoutes);
app.use("/api/horaireOuverture", horaireOuvertureRoutes);
app.use("/api/vehicule", vehiculeRoutes);

app.use(cors());
// pour lancer le server
app.listen(port, () => console.log("le server a démaré au port " + port));
