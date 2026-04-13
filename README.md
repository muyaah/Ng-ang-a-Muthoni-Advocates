# Ng'ang'a Muthoni Advocates - Local Development Guide

This project was built using React, TypeScript, Tailwind CSS, and Firebase. Follow these steps to set up and run the project locally in Cursor or VS Code.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v18 or higher recommended).
- **npm**: Usually comes with Node.js.

## Getting Started

### 1. Extract and Open
Extract the downloaded ZIP file and open the folder in **Cursor** or **VS Code**.

### 2. Install Dependencies
Open your terminal in the editor and run:
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory. You can copy the template from `.env.example`:
```bash
cp .env.example .env
```
Fill in the values in `.env`. For Firebase, you can find the values in `firebase-applet-config.json`.

### 4. Start the Development Server
Run the following command to start the app:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code.
  - `components/`: Reusable UI components.
  - `pages/`: Individual page components.
  - `lib/`: Utility functions and constants.
- `components/ui/`: shadcn/ui components.
- `public/`: Static assets.

## Firebase Setup
The project is configured to use Firebase for the backend (Bookings, Blog, etc.). 
- The configuration is loaded from `firebase-applet-config.json` or environment variables.
- Security rules are located in `firestore.rules`.

## Troubleshooting
- **Module not found**: Ensure you ran `npm install`.
- **Firebase errors**: Check that your `.env` or `firebase-applet-config.json` contains valid credentials.
- **Tailwind styles not applying**: Ensure you are running the dev server (`npm run dev`).

---
Built with ❤️ in AI Studio.
