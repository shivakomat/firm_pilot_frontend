#!/bin/bash

# Backup current package.json
cp package.json package.local.json

# Copy production package.json for deployment
cp package.prod.json package.json

# Add and commit changes
git add .
git commit -m "Deploy with production package.json"

# Deploy to Heroku
git push heroku main

# Restore local package.json
cp package.local.json package.json

echo "Deployment complete. Local package.json restored."
