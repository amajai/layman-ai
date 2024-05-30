[![Netlify Status](https://api.netlify.com/api/v1/badges/54dfb79f-24e4-45e4-adec-86ae4166bfed/deploy-status)](https://app.netlify.com/sites/laymanai/deploys)

# Layman AI

Layman AI simplifies complex text, making it easier to understand for everyone. This project transforms detailed, technical, or hard-to-understand information into plain language, enhancing accessibility and comprehension.

## Table of Contents

- [Overview](#overview)  
- [Features](#key-features) 
- [Project Architecture](#project-architecture) 
- [Technologies Used](#technologies-used) 
- [Setup Instructions](#setup-instructions) 
- [Usage Guidelines](#usage-guidelines) 
- [Resources](#resources) 


## Overview
Layman AI is a web application that takes user input text and converts it into simpler, easy-to-understand language. It aims to break down barriers in communication, education, and daily information processing.

## Key Features
1. Text Simplification: Converts complex text into plain language.
2. User Authentication: Allows users to register and log in.
3. Prompt History: Stores past prompts for registered users (cloud storage) and demo users (local storage).
4. API Integration: Utilizes the Hugging Face LLM Inference API for text simplification.

## Project Architecture

### Frontend
Technology: 
- Next.js, Tailwind CSS

Components:
- UI Components: Input fields, buttons, forms, display of simplified text
- API Requests: Communicates with Next.js API routes
- Local Storage: Stores past prompts for demo users

### Backend
Technology: 
- Next.js API Routes

Components:
- API Endpoints: Handle CRUD operations, user authentication, text simplification requests
- Database Interaction: Stores user data, prompt history

### External Services
- Hugging Face Inference API: Provides AI LLM for text generation which is then made for text simplification
- Cloud Storage: Stores past prompts for registered users
- Netlify: Where the web application is being hosted

### Database
Technology: 
- MongoDB

Components:
- User Data: Stores registration and login information
- Prompt History: Stores history of user prompts

## Technologies Used
- Frontend: Next.js, Tailwind CSS

- Backend: Node.js, Next.js API Routes

- Database: MongoDB

- External Services: Hugging Face API, MongoDB Cloud Storage, Netlify

## Setup Instructions
1. Clone the Repository

```bash
git clone https://github.com/yourusername/layman-ai.git
cd layman-ai
```
2. Install Dependencies

```bash
npm install
```

3. Configure Environment Variables

    Create a `.env.local` file in the root directory.
   
Add the following environment variables:

```env
HF_TOKEN=<your-hugging-face-api-key>
NEXT_PUBLIC_HF_TOKEN=<your-hugging-face-api-key>
MONGODB_URI=<your-mongodb-connection-string>
NEXTAUTH_SECRET=<your-sercet-secret-auth-pass>
NEXTAUTH_URL=<Current website URL>
```

4. Run the Application

```bash
npm run dev
```

5. Access the Application
   
    Open your browser and navigate to http://localhost:3000.

## Usage Guidelines
### Text Simplification
1. Enter the text you want to simplify into the input field.
2. Click "Simplify" to receive the simplified version of the text.
   
### User Registration and Login
1. Register for an account to unlock more features.
2. Login to access your saved prompts and utilize cloud storage.

### Prompt History
1. Demo users can store up to 5 prompts per day in local storage.
2. Registered users can store up to 30 prompts per day in cloud storage.
3. Special users can get unlimited access by contacting me directly.
   
## Resources

### CSS Helper
1. https://tailwindcomponents.com/cheatsheet

### Component Template
1. https://kutty.netlify.app/components
2. https://mambaui.com/components
3. https://www.landingfolio.com/library/all/tailwind

### Icons
1. https://heroicons.com

## AI Models
1. https://huggingface.co/models
