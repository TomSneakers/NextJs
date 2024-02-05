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
