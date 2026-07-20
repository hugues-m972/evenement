# Événement Backend

API backend pour une plateforme de gestion d'événements (mariages, funérailles, concerts, conférences...). Permet aux organisateurs de gérer leurs invités, prestataires, budget, et aux participants de s'inscrire ou répondre à une invitation.

## 🚀 Fonctionnalités

- Gestion d'événements privés (sur invitation) et publics (inscription libre)
- Gestion des invités avec RSVP (Oui/Non/Peut-être)
- Inscriptions publiques avec QR code de contrôle d'accès
- Gestion des collaborateurs par événement (rôles : owner, editor, viewer)
- Suivi du budget et des prestataires
- Authentification JWT

## 🛠️ Stack technique

- **Framework** : NestJS
- **Base de données** : PostgreSQL
- **ORM** : TypeORM
- **Conteneurisation** : Docker

## 📋 Prérequis

- Node.js v18+
- Docker et Docker Compose
- npm

## ⚙️ Installation



2. Installer les dépendances
\`\`\`bash
npm install
\`\`\`

3. Créer le fichier `.env` à la racine (voir `.env.example`)
\`\`\`
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=evenement_user
DB_PASSWORD=ton_mot_de_passe
DB_DATABASE=evenement_db
\`\`\`

4. Lancer PostgreSQL avec Docker
\`\`\`bash
docker compose up -d
\`\`\`

5. Exécuter les migrations
\`\`\`bash
npm run migration:run
\`\`\`

6. Démarrer le serveur en mode développement
\`\`\`bash
npm run start:dev
\`\`\`

L'API tourne sur `http://localhost:3000`.

## 📁 Structure du projet

\`\`\`
src/
├── auth/           # Authentification (JWT)
├── users/          # Gestion des utilisateurs
├── events/         # Gestion des événements
├── guests/         # Invités (événements privés)
├── registrations/  # Inscriptions (événements publics)
├── vendors/        # Prestataires
├── expenses/       # Budget/dépenses
├── migrations/     # Migrations TypeORM
└── common/         # Utilitaires partagés (guards, decorators...)
\`\`\`

## 🗄️ Migrations

\`\`\`bash
# Générer une migration après modification d'une entité
npm run migration:generate -- src/migrations/NomDeLaMigration

# Exécuter les migrations
npm run migration:run

# Annuler la dernière migration
npm run migration:revert
\`\`\`

## 🌿 Workflow Git

Ce projet suit une convention de branches par fonctionnalité :
- `feature/nom-fonctionnalite` → nouvelle fonctionnalité
- `fix/nom-bug` → correction de bug

## 📄 Licence

Projet personnel — [MEDEGNON Hugues]