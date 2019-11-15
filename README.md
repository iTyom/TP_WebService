
T.P WebServices
Ruscelli Tom


Spécification de l’API

Création d’un compte

Utilité de la méthode
La méthode de création de compte permettra à l’utilisateur d’ouvrir un compte en banque lui permettant d’effectuer certaines transactions. Une fois le compte créé, l’utilisateur reçoit un numéro de compte formaté d’une façon précise, et un code pin. 

Verbe de la méthode
La méthode sera en « POST » 

URL
Localhost:8004/user/register

Paramètre de l’URL
Il n’y aura pas de paramètre dans l’URL, c’est une requête en méthode POST. 

Paramètre du header
Les paramètres seront : 
-	Accept : application/json
-	Content-Type : application/json
-	Content-Length : 100

Corps de la requête
Le corps de la requête sera de type JSON et elle contiendra la civilité de l’utilisateur, son prénom, son nom, sa date de naissance et son adresse de résidence

Message du retour
Le serveur renvoie à l’utilisateur son numéro de compte qui sera aussi son identifiant pour se connecter, ainsi que son code pin. Le numéro de compte sera en chaine de caractère, et son code pin en int avec le code http 201 qui signifie que la requête a bien abouti avec la création d’un document. 

Description des erreurs
-	Erreur 405 : Les données insérés sont invalides. 

Argumentaire
Tout d’abord nous passons par une méthode POST car nous insérons ici un document avec la création d’un utilisateur. C’est en cela que nous ne mettons aucun paramètre dans l’URL, les informations passerons par le body. 



Connexion

Utilité de la méthode
Permettra à l’utilisateur d’utiliser son compte en banque pour se connecter et ainsi procédé à des transactions. 

Verbe de la méthode
La méthode sera en « POST » 

URL
Localhost:8004/user/login
Localhost:8004/user/logout

Paramètre de l’URL
Aucun paramètre dans l’URL, nous passons par une méthode POST pour la connexion, et par une méthode GET pour la déconnexion

Paramètre du header
Les paramètres seront : 
-	Accept : application/json
-	Content-Type : application/json
-	Content-Length : 100
-	Set-Cookie : token

Corps de la requête
Le corps de la requête sera de type JSON, elle contiendra l’identifiant de l’utilisateur et son code pin, lui permettant de se connecter. Il n’y aura pas de corps de requête pour la méthode de déconnexion.

Message du retour
Le serveur renvoie à l’utilisateur un token JWT stocké sur son ordinateur.

Description des erreurs
-	Erreur 400 : Login ou Mot de passe invalide

Argumentaire
On utilise ici une méthode POST pour ne pas avoir le mot de passe dans l’URL de la méthode. En plus des autres éléments dans le header de la requête, nous passons le paramètre Set-Cookie permettant de dire au navigateur de sauvegarder le cookie qui est le JWT généré. 










Déconnexion

Utilité de la méthode
Permettra à l’utilisateur de se déconnecter.

Verbe de la méthode
La méthode sera en « GET » 

URL
Localhost:8004/user/logout

Paramètre de l’URL
Aucun paramètre dans l’URL

Paramètre du header
Les paramètres seront : 
-	Accept : application/json
-	Content-Type : application/json
-	Content-Length : 100

Corps de la requête
Il n’y a pas de corps de requête

Message du retour

Description des erreurs

Argumentaire














Dépôt / retrait d’argent
Utilité de la méthode
Permet à l’utilisateur de faire des transactions au sein de son compte en banque.

Verbe de la méthode
La méthode sera en « POST » 

URL
Localhost:8004/transaction

Paramètre de l’URL
Aucun paramètre dans l’URL car nous passons par une méthode POST

Paramètre du header
Les paramètres seront : 
-	Accept : application/json
-	Content-Type : application/json
-	Content-Length : 100

Corps de la requête
Le corps de la requête sera composé avec les informations suivantes sous format JSON : 
-	Numéro de compte, 
-	Date de la transaction,
-	Montant de la transaction (négatif ou positif) 
-	Un JWT valide 

Message du retour
Le serveur renvoie un code 201 signalant que la requête a bien abouti.

Description des erreurs
-	Erreur 405 : Les données insérés sont invalides. 
-	Erreur 404 : Compte en banque introuvable

Argumentaire












Virements
Utilité de la méthode
Permet à l’utilisateur de faire des virements à destination d’un autre compte en banque, qu’il soit interne ou externe. 

Verbe de la méthode
La méthode sera en « POST » 

URL
Localhost:8004/virement

Paramètre de l’URL
Aucun paramètre dans l’URL car nous passons par une méthode POST

Paramètre du header
Les paramètres seront : 
-	Accept : application/json
-	Content-Type : application/json
-	Content-Length : 100

Corps de la requête
Le corps de la requête sera composé avec les informations suivantes sous format JSON : 
-	Numéro de compte source, 
-	Numéro de compte destinataire,
-	Montant de la transaction 
-	Un JWT valide OU BankId

Message du retour
Le serveur renvoie un code 201 signalant que la requête a bien abouti.

Description des erreurs
-	Erreur 405 : Les données insérés sont invalides. 
-	Erreur 404 : Compte en banque introuvable

Argumentaire




