#!/bin/bash

# Build Angular app locally first
echo "Building Angular app locally..."
ng build --configuration production

# Check if build was successful
if [ ! -d "dist/skote" ]; then
    echo "Build failed - dist/skote directory not found"
    exit 1
fi

# Backup current package.json
cp package.json package.local.json

# Copy Heroku-only package.json (minimal dependencies)
cp package.heroku.json package.json

# Add and commit changes
git add .
git commit -m "Deploy pre-built Angular app to Heroku"

# Deploy to Heroku
git push heroku main

# Restore local package.json
cp package.local.json package.json

echo "Deployment complete. Local package.json restored."
