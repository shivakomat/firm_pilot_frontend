# Heroku Deployment Guide for Firm Pilot Frontend

This guide explains how to deploy the Angular Firm Pilot Frontend application to Heroku.

## Prerequisites

1. **Heroku Account**: Sign up at [heroku.com](https://heroku.com)
2. **Heroku CLI**: Install from [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)
3. **Git**: Ensure your project is in a Git repository

## Deployment Steps

### 1. Update Backend URL

Before deploying, update the production environment with your actual backend URL:

```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  defaultauth: 'fakebackend',
  apiUrl: 'https://your-actual-backend-app.herokuapp.com', // Replace this!
  // ... rest of config
};
```

### 2. Login to Heroku

```bash
heroku login
```

### 3. Create Heroku Application

```bash
# Navigate to the Admin directory
cd Admin

# Create a new Heroku app (replace 'your-app-name' with your desired name)
heroku create your-firm-pilot-frontend

# Or if you already have an app:
heroku git:remote -a your-existing-app-name
```

### 4. Configure Heroku Environment

```bash
# Set Node.js version (optional)
heroku config:set NODE_VERSION=18.x

# Set NPM configuration for production build
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set NODE_ENV=production
```

### 5. Deploy to Heroku

```bash
# Add and commit all changes
git add .
git commit -m "Configure for Heroku deployment"

# Push to Heroku
git push heroku main
```

### 6. Open Your Application

```bash
heroku open
```

## Files Created for Heroku Deployment

### `server.js`
- Express server to serve the Angular application
- Handles SPA routing by serving index.html for all routes
- Configured to use Heroku's dynamic PORT

### `Procfile`
- Tells Heroku how to start the application
- Runs `node server.js` as the web process

### Updated `package.json`
- **start**: Changed to `node server.js` for production
- **dev**: New script for local development with proxy
- **heroku-postbuild**: Automatically builds the app after Heroku deployment
- **dependencies**: Added Express and Angular CLI for production builds

### Environment Configuration
- **environment.ts**: Development config with localhost backend
- **environment.prod.ts**: Production config with Heroku backend URL

## Important Notes

### Backend URL Configuration
Make sure to replace `https://your-backend-app.herokuapp.com` in `environment.prod.ts` with your actual backend Heroku URL.

### Local Development
For local development, use:
```bash
npm run dev  # This uses the proxy configuration
```

### Production Build Testing
To test the production build locally:
```bash
npm run build-prod
npm start
```

## Troubleshooting

### Common Issues

1. **Build Failures**: Ensure all dependencies are in `dependencies` (not `devDependencies`)
2. **Routing Issues**: The Express server handles SPA routing automatically
3. **API Calls Failing**: Check that `environment.prod.ts` has the correct backend URL
4. **Memory Issues**: Heroku has memory limits; optimize your build if needed

### Heroku Logs
To debug issues, check Heroku logs:
```bash
heroku logs --tail
```

### Environment Variables
Set environment variables in Heroku dashboard or CLI:
```bash
heroku config:set API_URL=https://your-backend.herokuapp.com
```

## Post-Deployment Checklist

- [ ] Application loads successfully
- [ ] Login/signup functionality works
- [ ] API calls reach your backend
- [ ] Client invitation system functions properly
- [ ] All routes work (refresh test)
- [ ] No console errors in browser

## Support

If you encounter issues:
1. Check Heroku logs: `heroku logs --tail`
2. Verify environment configuration
3. Test locally with production build
4. Ensure backend is deployed and accessible

## Security Notes

- Never commit sensitive API keys or secrets
- Use Heroku config vars for sensitive data
- Ensure HTTPS is enabled for production
- Validate all environment configurations
