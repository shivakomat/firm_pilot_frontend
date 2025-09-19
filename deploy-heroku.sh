#!/bin/bash

# Build Angular app locally first
echo "Building Angular app locally..."
npx ng build --configuration production

# Check if build was successful
if [ ! -d "dist/skote" ]; then
    echo "Build failed - dist/skote directory not found"
    exit 1
fi

# Backup current files
cp package.json package.local.json
cp .gitignore .gitignore.backup

# Copy Heroku-only package.json (minimal dependencies)
cp package.heroku.json package.json

# Temporarily remove /dist from .gitignore to include build files
sed -i '' '/^\/dist$/d' .gitignore

# Add and commit changes (including dist folder)
git add .
git commit -m "🔄 Update client intake form to use new /my/intake API endpoints"

# Deploy to Heroku
git push heroku main

# Restore original files
cp package.local.json package.json
cp .gitignore.backup .gitignore
rm .gitignore.backup

echo "Deployment complete. Local files restored."
