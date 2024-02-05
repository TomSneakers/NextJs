# NextJs

## Introduction

Next.js est un framework de développement web front-end open-source basé sur React. Il permet des fonctionnalités telles que le rendu côté serveur et la génération de sites statiques pour les sites web basés sur React. Il est une alternative à Create React App, mais avec des fonctionnalités supplémentaires pour le rendu côté serveur et le rendu statique.

## Presentation de NextJs

Server-Side Rendering (SSR) : Next.js permet de générer des pages côté serveur. Cela signifie que le serveur génère la page pour chaque requête. Cela permet d'améliorer les performances et le référencement de votre site web.

Static Site Generation (SSG) : Next.js permet de générer des sites statiques. Cela signifie que le serveur génère les pages à l'avance, au moment de la construction de l'application. Cela permet d'améliorer les performances et la sécurité de votre site web.

Optimisation des performance : Next.js permet d'optimiser les performances de votre site web. Il propose des fonctionnalités telles que le prefetching, le code splitting, le lazy loading, etc.

## Installation

Pour installer Next.js, vous pouvez utiliser npm ou yarn. Voici comment installer Next.js avec npm :

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

## Structure du projet

Voici la structure de base d'un projet Next.js :

```
my-app/
  pages/
    index.js
    about.js
  public/
    favicon.ico
  styles/
    globals.css
  package.json
  README.md
```

### Dossier node_modules

Le dossier node_modules contient les dépendances de votre projet. Il est généré automatiquement lorsque vous installez des dépendances avec npm ou yarn.

### Dosser public

Le dossier public contient les fichiers statiques de votre projet, tels que les images, les polices, les icônes, etc.

### Dossier src

Le dossier src contient les fichiers sources de votre projet, tels que les composants, les pages, les styles, etc.

### Fichier .eslintrc.json

Le fichier .eslintrc.json contient la configuration de ESLint, un outil de linting pour JavaScript.

### Fichier .gitignore

Le fichier .gitignore contient la liste des fichiers et dossiers à ignorer lors de l'ajout de fichiers à Git.

### Fichier next-env.d.ts

Le fichier next-env.d.ts est un fichier de configuration pour TypeScript.

### Fichier next.config.mjs

Le fichier next.config.mjs est un fichier de configuration pour Next.js.

### Fichier package.json

Le fichier package.json contient les métadonnées de votre projet, telles que le nom, la version, les dépendances, les scripts, etc.

### Fichier package-lock.json

Le fichier package-lock.json contient la liste des dépendances de votre projet, ainsi que les versions exactes de chaque dépendance.

### Fichier postcss.config.js

Le fichier postcss.config.js est un fichier de configuration pour PostCSS, un outil de post-processing pour CSS.

### Fichier tsconfig.json

Le fichier tsconfig.json est un fichier de configuration pour TypeScript, un langage de programmation.

### Fichier page.tsx

Le fichier page.tsx est un fichier de configuration pour TypeScript, un langage de programmation. C'est comme le home de votre application.

## Définition de Typescript

TypeScript est un langage de programmation open-source développé par Microsoft. Il est conçu pour être un sur-ensemble de JavaScript, et ajoute des fonctionnalités telles que le typage statique, les classes, les modules, les interfaces, etc. Il est utilisé pour le développement d'applications web front-end et back-end, ainsi que pour le développement d'applications mobiles et de jeux vidéo.

### Avantages de NextJs

Tailwinds est déja préconfiguré

## Routing de base avec NextJs

Next.js utilise un système de routage basé sur les fichiers. Cela signifie que chaque fichier dans le dossier pages correspond à une route dans votre application. Par exemple, le fichier pages/index.js correspond à la route /, le fichier pages/about.js correspond à la route /about, etc.

## Quel est l’un des avantages de l’utilisation des modules CSS ?

Fournit un moyen de créer des classes CSS localement étendues aux composants par défaut, réduisant ainsi le risque de conflits de style.
Les modules CSS créent des noms de classe uniques pour chaque composant, vous n'avez donc pas à vous soucier des collisions de styles.

## Comment Next.js optimise-t-il les polices ?

Il héberge les fichiers de polices avec d'autres actifs statiques afin qu'il n'y ait aucune demande réseau supplémentaire.
Next.js télécharge les fichiers de polices au moment de la construction et les héberge avec vos autres ressources statiques. Cela signifie que lorsqu'un utilisateur visite votre application, il n'y a pas de requêtes réseau supplémentaires pour les polices qui pourraient avoir un impact sur les performances.

## Quel est le but du fichier de mise en page dans Next.js ?

Pour partager l'interface utilisateur sur plusieurs pages
C'est vrai, le fichier de mise en page est le meilleur moyen de créer une mise en page partagée que toutes les pages de votre application peuvent utiliser.

## À quoi sert le `<Link>` composant dans Next.js ?

Pour naviguer entre les pages sans rechargement de page
Le composant `<Link>` est utilisé pour naviguer entre les pages de votre application sans recharger la page entière. Cela signifie que la navigation est plus rapide et plus fluide pour les utilisateurs.

## Que fait Next.js lorsqu'un composant `<Link>` apparaît dans la fenêtre d'affichage du navigateur dans un environnement de production ?

Pré-récupère le code de l'itinéraire lié
Next.js préextrait automatiquement le code de l'itinéraire lié en arrière-plan. Au moment où l'utilisateur clique sur le lien, le code de la page de destination sera déjà chargé en arrière-plan, et c'est ce qui rend la transition de page quasi instantanée !

## Qu'est-ce que l'amorçage dans le contexte des bases de données ?

Remplir la base de données avec un ensemble initial de données
C'est exact! L'amorçage est utile lorsque vous souhaitez disposer de données avec lesquelles travailler lors de la création de votre application.

## Dans lequel de ces scénarios ne devriez-vous pas interroger directement votre base de données ?

Lorsque vous récupérez des données sur le client
C'est vrai, vous ne devez pas interroger votre base de données directement lors de la récupération des données sur le client, car cela exposerait les secrets de votre base de données.

## Quel est l'avantage d'utiliser les composants React Server pour récupérer des données ?

Ils vous permettent d'interroger la base de données directement depuis le serveur sans couche API supplémentaire.
Les composants serveur vous permettent de récupérer des données directement à partir de votre base de données.

## Qu'est-ce que SQL vous permet de faire en termes de récupération de données ?

Récupérer et manipuler des données spécifiques
SQL vous permet d'écrire des requêtes ciblées pour récupérer et manipuler des données spécifiques

## Quand pourriez-vous vouloir utiliser un motif en cascade ?

Pour satisfaire une condition avant de faire la prochaine demande
Par exemple, vous souhaiterez peut-être d'abord récupérer l'ID et les informations de profil d'un utilisateur. Une fois que vous avez la pièce d’identité, vous pouvez alors procéder à la récupération de leur liste d’amis.

## Qu’est-ce que le rendu dynamique ?

Avec le rendu dynamique, le contenu est rendu sur le serveur pour chaque utilisateur au moment de la demande (lorsque l'utilisateur visite la page). Le rendu dynamique présente quelques avantages :

- **Données** en temps réel - Le rendu dynamique permet à votre application d'afficher des données en temps réel ou fréquemment mises à jour. Ceci est idéal pour les applications où les données changent souvent.

- **Contenu spécifique à l'utilisateur :** il est plus facile de proposer du contenu personnalisé, tel que des tableaux de bord ou des profils utilisateur, et de mettre à jour les données en fonction de l'interaction de l'utilisateur.
- **Informations sur l'heure de la demande** Le rendu dynamique vous permet d'accéder à des informations qui ne peuvent être connues qu'au moment de la demande, telles que les cookies ou les paramètres de recherche d'URL.

## Quel type d’informations ne peut être connu qu’au moment de la demande ?

Cookies et paramètres de recherche d'URL

## Qu’est-ce que le streaming ?

Le streaming est une technique de transfert de données qui vous permet de diviser un itinéraire en « morceaux » plus petits et de les diffuser progressivement du serveur vers le client à mesure qu'ils sont prêts.

En diffusant en continu, vous pouvez empêcher les demandes de données lentes de bloquer l'intégralité de votre page. Cela permet à l'utilisateur de voir et d'interagir avec des parties de la page sans attendre que toutes les données soient chargées avant qu'une interface utilisateur puisse être affichée à l'utilisateur.

## Quel est l’avantage du streaming ?

Les morceaux sont rendus en parallèle, ce qui réduit le temps de chargement global
L'un des avantages de cette approche est que vous pouvez réduire considérablement le temps de chargement global de votre page.

## En général, qu'est-ce qui est considéré comme une bonne pratique lorsque l'on travaille avec Suspense et la récupération de données ?

Déplacer les récupérations de données vers les composants qui en ont besoin
En déplaçant la récupération des données vers les composants qui en ont besoin, vous pouvez créer des limites de Suspense plus granulaires. Cela vous permet de diffuser des composants spécifiques et d'empêcher le blocage de l'interface utilisateur.

## Quels sont les trous dans le contexte du prérendu partiel ?

Emplacements où le contenu dynamique sera chargé de manière asynchrone
C'est exact! Les trous sont des emplacements où le contenu dynamique sera chargé de manière asynchrone au moment de la demande.

## Pourquoi utiliser les paramètres de recherche d'URL ?

Comme mentionné ci-dessus, vous utiliserez les paramètres de recherche d'URL pour gérer l'état de la recherche. Ce modèle peut être nouveau si vous avez l'habitude de le faire avec l'état côté client.

L'implémentation de la recherche avec des paramètres d'URL présente quelques avantages :

- **URL pouvant être mises en signet et partageables :** étant donné que les paramètres de recherche se trouvent dans l'URL, les utilisateurs peuvent ajouter l'état actuel de l'application à leurs favoris, y compris leurs requêtes de recherche et leurs filtres, pour référence ou partage ultérieur.
- **Rendu côté serveur et chargement initial :** les paramètres d'URL peuvent être directement consommés sur le serveur pour restituer l'état initial, ce qui facilite la gestion du rendu du serveur.
- **Analyse et suivi :** le fait d'avoir des requêtes de recherche et des filtres directement dans l'URL facilite le suivi du comportement des utilisateurs sans nécessiter de logique supplémentaire côté client.

## L'anti-rebond

L'anti-rebond est une pratique de programmation qui limite la vitesse à laquelle une fonction peut se déclencher. Dans notre cas, vous souhaitez interroger la base de données uniquement lorsque l'utilisateur a arrêté de taper.

### Installation de use-debounce

```bash
npm i use-debounce
```

Cette fonction encapsulera le contenu de handleSearchet n'exécutera le code qu'après un temps spécifique une fois que l'utilisateur aura arrêté de taper (300 ms).

## Quel problème l’anti-rebond résout-il dans la fonction de recherche ?

Il empêche une nouvelle requête de base de données à chaque frappe
C'est exact! L'anti-rebond empêche une nouvelle requête de base de données à chaque frappe, économisant ainsi des ressources.

## Que sont les actions du serveur ?

Les actions React Server vous permettent d'exécuter du code asynchrone directement sur le serveur. Ils éliminent le besoin de créer des points de terminaison d’API pour muter vos données. Au lieu de cela, vous écrivez des fonctions asynchrones qui s'exécutent sur le serveur et peuvent être invoquées à partir de vos composants client ou serveur.

La sécurité est une priorité absolue pour les applications Web, car elles peuvent être vulnérables à diverses menaces. C'est là qu'interviennent les actions serveur. Elles offrent une solution de sécurité efficace, protégeant contre différents types d'attaques, sécurisant vos données et garantissant un accès autorisé. Les actions de serveur y parviennent grâce à des techniques telles que les requêtes POST, les fermetures chiffrées, les contrôles stricts des entrées, le hachage des messages d'erreur et les restrictions d'hôte, toutes travaillant ensemble pour améliorer considérablement la sécurité de votre application.

## Quel est l'un des avantages de l'utilisation d'actions serveur ?

Amélioration progressive.
C'est exact! Cela permet aux utilisateurs d'interagir avec le formulaire et de soumettre des données même si le JavaScript du formulaire n'a pas encore été chargé ou s'il échoue.

## Quel fichier dans Next.js sert de fourre-tout pour les erreurs inattendues dans vos segments d'itinéraire ?

Quel fichier dans Next.js sert de fourre-tout pour les erreurs inattendues dans vos segments d'itinéraire ?
Le fichier « error.tsx » sert de fourre-tout pour les erreurs inattendues et vous permet d'afficher une interface utilisateur de secours à vos utilisateurs.

## Lequel des énoncés suivants décrit le mieux la différence entre l’authentification et l’autorisation ?

L'authentification vérifie votre identité. L'autorisation détermine ce à quoi vous pouvez accéder.
C'est exact! Bien qu'elles semblent similaires, l'authentification vérifie votre identité tandis que l'autorisation détermine ce à quoi vous pouvez accéder.

## Que sont les métadonnées ?

Dans le développement Web, les métadonnées fournissent des détails supplémentaires sur une page Web. Les métadonnées ne sont pas visibles pour les utilisateurs visitant la page. Au lieu de cela, il fonctionne en coulisse, intégré au code HTML de la page, généralement au sein de l'`<head>`élément. Ces informations cachées sont cruciales pour les moteurs de recherche et autres systèmes qui doivent mieux comprendre le contenu de votre page Web.

## Pourquoi les métadonnées sont-elles importantes ?

Les métadonnées jouent un rôle important dans l'amélioration du référencement d'une page Web, la rendant plus accessible et compréhensible pour les moteurs de recherche et les plateformes de médias sociaux. Des métadonnées appropriées aident les moteurs de recherche à indexer efficacement les pages Web, améliorant ainsi leur classement dans les résultats de recherche. De plus, les métadonnées comme Open Graph améliorent l'apparence des liens partagés sur les réseaux sociaux, rendant le contenu plus attrayant et informatif pour les utilisateurs.

## Types de métadonnées

Il existe différents types de métadonnées, chacune ayant un objectif unique. Certains types courants incluent :
**Métadonnées de titre :** responsables du titre d'une page Web affichée sur l'onglet du navigateur. C’est crucial pour le référencement car cela aide les moteurs de recherche à comprendre de quoi parle la page Web.

```bash
<title>Page Title</title>
```

**Description Métadonnées :** ces métadonnées fournissent un bref aperçu du contenu de la page Web et sont souvent affichées dans les résultats des moteurs de recherche.

```bash
<meta name="description" content="A brief description of the page content." />
```

**Métadonnées de mots-clés :** ces métadonnées incluent les mots-clés liés au contenu de la page Web, aidant les moteurs de recherche à indexer la page.

```bash
<meta name="keywords" content="keyword1, keyword2, keyword3" />
```

**Métadonnées Open Graph :** ces métadonnées améliorent la façon dont une page Web est représentée lorsqu'elle est partagée sur les plateformes de médias sociaux, en fournissant des informations telles que le titre, la description et l'image d'aperçu.

```bash

<meta property="og:title" content="Title Here" />
<meta property="og:description" content="Description Here" />
<meta property="og:image" content="image_url_here" />
```

**Métadonnées du favicon :** ces métadonnées relient le favicon (une petite icône) à la page Web, affichée dans la barre d'adresse ou l'onglet du navigateur.

```bash
<link rel="icon" href="path/to/favicon.ico" />
```

## Ajout de métadonnées

Next.js dispose d'une API de métadonnées qui peut être utilisée pour définir les métadonnées de votre application. Il existe deux manières d'ajouter des métadonnées à votre application :

- **Basé sur la configuration :** Exportez un objet statiquemetadata ou une generateMetadatafonction dynamique dans un fichier layout.jsou page.js.
- **Basé sur des fichiers :** Next.js propose une gamme de fichiers spéciaux spécifiquement utilisés à des fins de métadonnées :

  - favicon.ico, apple-icon.jpg, eticon.jpg : Utilisé pour les favicons et les icônes
  - opengraph-image.jpget twitter-image.jpg: Employé pour les images des réseaux sociaux
  - robots.txt : Fournit des instructions pour l'exploration des moteurs de recherche

  - sitemap.xml: Offre des informations sur la structure du site Web

Vous avez la possibilité d'utiliser ces fichiers pour des métadonnées statiques ou de les générer par programme au sein de votre projet.

Avec ces deux options, Next.js générera automatiquement les <head>éléments pertinents pour vos pages.
