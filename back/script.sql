-- création de table de ma BDD
CREATE TABLE vehicule(
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
)

CREATE TABLE service (
    nom_service VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    id_user INT NOT NULL,
    id_service INT PRIMARY KEY NOT NULL AUTO_INCREMENT

)


CREATE TABLE user (
     nom VARCHAR(255) NOT NULL,
     prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    role_user VARCHAR(255) NOT NULL,
    id_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT
)
 
CREATE TABLE horaire_ouverture (
    jour  VARCHAR(255) NOT NULL,
    heure_ouverture  VARCHAR(255) NOT NULL, 
    heure_fermeture  VARCHAR(255) NOT NULL, 
    id_user INT NOT NULL,
    id_horaire_ouverture INT PRIMARY KEY NOT NULL AUTO_INCREMENT
    
)

CREATE TABLE avis(
    heure_ouverture  VARCHAR(255) NOT NULL,
    commentaire VARCHAR(255) NOT NULL,  
    note VARCHAR(255) NOT NULL,  
    date_publication VARCHAR(255) NOT NULL,  
    approuvee  BOOLEAN DEFAULT FALSE  NOT NULL, 
    id_user INT NOT NULL,
    id_avis INT PRIMARY KEY NOT NULL AUTO_INCREMENT
)

-- création de relation

ALTER TABLE horaire_ouverture ADD CONSTRAINT user_horaire_ouverture_fk FOREIGN KEY (id_user) REFERENCES user(id_user)

ALTER TABLE service  ADD CONSTRAINT user_service_fk FOREIGN KEY (id_user) REFERENCES user(id_user)

ALTER TABLE vehicule  ADD CONSTRAINT user_vehicule_fk FOREIGN KEY (id_user) REFERENCES user(id_user)
ALTER TABLE avis  ADD CONSTRAINT user_avis_fk FOREIGN KEY (id_user) REFERENCES user(id_user)




