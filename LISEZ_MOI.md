# Hangman : Le pendu

Bonjour et bienvenue dans ce projet de réaliation du jeu du pendu à l'aide de React

Si vous corrigez cet exercice, c'est que vous l'avez vous-même réalisé. Mais pour vous assurer une correction optimale je me permet de vous fournir quelques informations supplémentaires

## Lancer le projet

Comme pour votre projet, placez-vous à la racine du projet à l'aide de la commande `cd` et executez `npm start`

Si c'est aussi simple, pourquoi faire un fichier LISEZ MOI ?

Et bien parce que je me suis rendu compte en basculant mon projet de sa machine initiale à une autre que ce dernier ne se lançait pas toujours

Voyons les différents points qui pourrait empêcher le bon fonctionnement du projet

#### Pré-requis

Ce projet utilise :
* **Node version 11.14.0**
* **npm version 6.7.0**


* **react version 16.8.6**
* **react-dom version 16.8.6**
* **react-scripts version 2.1.8**

Il inclus la bibliothèque tierce, vu dans le cours, **Prop Types version 15.7.2**

## Erreur lors du lancement du serveur

#### Erreur 126

Si, comme moi, vous avez une liste de ligne avec le drapeau `ERR` lors du lancement du serveur, essayez de localiser l'une des lignes suivantes :

* `npm ERR! Exit status 126`
* `npm ERR! code ELIFECYCLE`

Si vous obtenez cette erreur, supprimez le dossier ***node_module*** et relancez la commande `npm start`

Si vous êtes sous Linux et que la précédente manipulation n'as pas fonctionné, je vous invite à consulter les réponses des utilisateurs sur ce [sujet StackOverflow](https://github.com/pro-react/react-app-boilerplate/issues/5#issuecomment-421882490)

---

#### Mauvaise version de NodeJS

Si vous obtenez une erreur vous indiquant que ce projet utilise une version de Node qui n'est pas la votre, vous pouvez mettre à jour Node en utilisant [NVM](https://github.com/creationix/nvm)

---

#### Mauvaise version de Node Package Manager

Si vous obtenez une erreur vous indiquant que ce projet utilise une version de NPM qui n'est pas la votre, vous pouvez mettre à jour NPM en utilisant la commande suivante :
`npm install -g npm@11.14.0`

Puis la commande `npm use v11.14.0` pour être sur d'utiliser la bonne version.

Je n'ai à ce jour pas eu d'autre erreur, et j'espère que vous pourrez lancer le script sans problèmes.

## Fin

Il ne me reste qu'à vous remercier d'avoir pris le temps de lire ce fichier, et à vous souhaiter une bonne correction !