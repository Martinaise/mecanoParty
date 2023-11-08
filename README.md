# mecanoParty
------------------------------pour sql  début-------------------------------------------
_________1 se connect a my sql_______
mysql -u root -p 

_______2 création de la bdd_____
CREATE DATABASE mecanoparty ;

__________3 voir la base de donnée_________
show databases;

_________4 se placer sur la bdd sur laquele on souhaite travailler________

use mecanoparty;

________5 crétion des tables_______

EX: CREATE TABLE vehicule(
    reference VARCHAR(255) NOT NULL,
    puissance VARCHAR(255) NOT NULL,
    couleur_exterieur VARCHAR(255) NOT NULL,
    nombre_de_siege INT NOT NULL,
    conso_mixte VARCHAR(255) NOT NULL,
    type_consommation_vehicule VARCHAR(255) NOT NULL,
    puissance_fiscal VARCHAR(255) NOT NULL,
    interieur VARCHAR(255) NOT NULL,
    poids INT NOT NULL,
    nombres_de_portes INT NOT NULL,
    capacite_du_coffre VARCHAR(255) NOT NULL,
    lieu_de_recuperation_voiture VARCHAR(255) NOT NULL,
    emission_carbonne VARCHAR(255) NOT NULL,
    prix_par_mois INT NOT NULL,
    prix INT NOT NULL,
    kilometrage VARCHAR(255) NOT NULL,
    marque_vehicule VARCHAR(255) NOT NULL,
    type_transmission VARCHAR(255) NOT NULL,
    annee_fabrication_vehicule VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    id_user INT NOT NULL,
    id_vehicule INT PRIMARY KEY NOT NULL AUTO_INCREMENT
);

________6 pour voir la table creer_______
describe vehicule;

_____6 pour supprimer une tables_______
drop table vehicule

_______7 pour voir table et leur relation(constraint)_____
 SHOW CREATE TABLE vehicule;

 ________8 regarder la table voulu_______
 select * from user;

 ------------------------------pour sql fin  -------------------------------------------