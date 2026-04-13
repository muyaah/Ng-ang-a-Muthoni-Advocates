@echo off
echo 🚀 Starting setup for Ng'ang'a Muthoni Advocates website...

:: Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Error: npm is not installed. Please install Node.js first.
    pause
    exit /b
)

:: Install dependencies
echo 📦 Installing dependencies...
call npm install

:: Create .env if it doesn't exist
if not exist .env (
    echo 📝 Creating .env file from .env.example...
    copy .env.example .env
    echo ⚠️  Please update the .env file with your actual API keys.
)

echo ✅ Setup complete!
echo 👉 Run 'npm run dev' to start the development server.
pause
