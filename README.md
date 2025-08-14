# 🎯 Anime Requester – V1

[![GitHub repo size](https://img.shields.io/github/repo-size/princecorg/AnimeRequesterV1)](https://github.com/princecorg/AnimeRequesterV1) 
[![GitHub last commit](https://img.shields.io/github/last-commit/princecorg/AnimeRequesterV1)](https://github.com/princecorg/AnimeRequesterV1/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/princecorg/AnimeRequesterV1)](https://github.com/princecorg/AnimeRequesterV1/issues)

## 📌 Présentation

- Ce projet consiste à réaliser une page web permettant à l’utilisateur de rechercher des **animes** via l’API **Anime DB** (RapidAPI).  
- Il s’agit de la **Version 1** : une version de base avec un formulaire simple et l’affichage des résultats sous forme de cartes.

| Desktop - Tablette | Mobile |
|-------------------|--------|
| <img src="https://github.com/user-attachments/assets/06d70f9a-3f2d-49f6-8c21-00974dfc2562" alt="Desktop" height="450"/> | <img src="https://github.com/user-attachments/assets/3e1d67bb-635a-48ba-b348-f3fe8dc5b76f" alt="Mobile" height="450"/> |

## 🛠️ Socle technique

- **Langages** : HTML, CSS, JavaScript (ES6+)
- **IDE recommandé** : Visual Studio Code
- **Versionnage** : Git & GitHub (repository public)

## 🎯 Objectifs pédagogiques

1. Utiliser une API conformément à sa documentation  
2. Effectuer des requêtes HTTP (méthode GET)  
3. Manipuler le DOM pour intégrer dynamiquement du contenu  
4. Interagir avec la mise en forme via JavaScript  
5. Organiser le code JavaScript en modules séparés  

## 📋 Fonctionnalités de la version 1

L’utilisateur peut rechercher :  

1. **Par titre** (10 résultats maximum)  
2. **Par identifiant** (1 seul résultat)  
3. **Par classement** (1 seul résultat, selon le rang saisi)  

Chaque **carte** affiche :  

- 📌 Titre de l’anime  
- 🖼️ Image (si disponible)  
- 📝 Synopsis  
- 🏷️ Genres / catégories (si disponibles)  
- 🏆 Classement de l’anime  
- 🎬 Nombre d’épisodes  

### Boutons disponibles

- **Rechercher** : envoie la requête  
- **Réinitialiser** : vide le formulaire et les résultats  

## 📱 Contraintes techniques

- **Responsive** : s’adapte aux mobiles, tablettes et desktop  
- **Conformité W3C** : validation HTML et CSS  
- **Accessibilité** : respecter idéalement la norme WCAG AA 2.0  
- **Découpage du code** : séparation claire des responsabilités (ex. récupération API, affichage cartes)  
- **Modules ES6** : utilisation des `import` / `export`  
- **Commits réguliers** et repository public sur GitHub  

## 🔑 Utilisation de l’API Anime DB

### 1. Création de compte RapidAPI
- Rendez-vous sur [RapidAPI](https://rapidapi.com/auth/sign-up)  
- Créez un compte (gratuit) et connectez-vous  

### 2. Ajout de l’API
- Dans la barre de recherche (ou `Ctrl+K`), cherchez **Anime DB** de Brian Rofiq  
- Ajoutez l’API à vos favoris  
- Récupérez votre **X-RapidAPI-Key**  
- Dans le navigateur, à la première utilisation, le script vous demandera de saisir cette clé (via une boîte de dialogue `prompt`)  


