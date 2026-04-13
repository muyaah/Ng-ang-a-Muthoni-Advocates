#!/bin/bash

echo "🚀 Starting setup for Ng'ang'a Muthoni Advocates website..."

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ Error: npm is not installed. Please install Node.js first."
    exit
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    echo "⚠️  Please update the .env file with your actual API keys."
fi

echo "✅ Setup complete!"
echo "👉 Run 'npm run dev' to start the development server."
