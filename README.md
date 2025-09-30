# Firm Pilot Frontend - Angular 18 Tax Consultant Portal

A comprehensive Angular 18 application for tax consultants and clients to manage projects, intake forms, and document processing.

## Production URL
https://firm-pilot-frontend-606fb7455f43.herokuapp.com/

## Development Setup

### Prerequisites
- Node.js 18.x (required for Angular 18 compatibility)
- npm 9.x
- Angular CLI 18.x

### Local Development
```bash
npm install
ng serve --proxy-config proxy.conf.json
```
Navigate to `http://localhost:4200/`

## Deployment Strategy

### ⚠️ Important: Heroku Auto-Build Issues
**Do NOT use `heroku-postbuild` for this project.** Angular 18 builds fail on Heroku due to:
- Platform-specific Rollup dependencies (`@rollup/rollup-linux-x64-gnu` vs `@rollup/rollup-darwin-arm64`)
- Node.js version conflicts between local (v23.5.0) and Heroku (v18.x)
- esbuild platform compatibility issues
- Complex Angular CLI dependency tree conflicts

### ✅ Proven Deployment Method: Dual Package.json Strategy

#### Files:
- `package.prod.json` - Full Angular dependencies for local development
- `package.heroku.json` - Minimal Express server dependencies for Heroku
- `package.local.json` - Backup of minimal server-only dependencies

#### Deployment Process:
```bash
# 1. Build Angular app locally (requires Node.js 18.x compatible environment)
ng build --configuration production

# 2. Switch to minimal Heroku package.json
cp package.heroku.json package.json

# 3. Deploy pre-built files
git add .
git commit -m "Deploy vXXX with pre-built dist files"
git push heroku main --force

# 4. Restore full package.json for development
cp package.prod.json package.json
```

#### Why This Works:
- ✅ Avoids Heroku build process entirely
- ✅ Uses pre-built, tested dist files
- ✅ Minimal server dependencies reduce conflicts
- ✅ Fast, reliable deployments
- ✅ Consistent build artifacts

## Project Features

### Tax Consultant Portal
- Client management and project creation
- Project status tracking (Not Started, In Progress, Completed, On Hold)
- Project type mapping for backend API compatibility
- Document management and intake forms

### Client Portal
- Project overview and progress tracking
- Tax intake form submission
- Document upload and management

### API Integration
- JWT token authentication
- Automatic token validation and redirect
- Project CRUD operations with proper `projectType` mapping
- Backend API compatibility with lowercase underscore format

## Technical Implementation
- **Framework**: Angular 18.2.11
- **UI**: Bootstrap 5.3.3
- **Notifications**: SweetAlert2
- **HTTP Client**: Angular HttpClient with RxJS
- **Authentication**: JWT tokens
- **Deployment**: Heroku with Express server

## Build

### Local Build
```bash
ng build --configuration production
```

### Development Build
```bash
ng build
```

Build artifacts are stored in `dist/skote/` directory.

## Testing

### Unit Tests
```bash
ng test
```

### End-to-End Tests
```bash
ng e2e
```

## Project Structure
```
src/
├── app/
│   ├── core/services/          # API services and authentication
│   ├── pages/
│   │   ├── tax-consultant/     # Tax consultant portal components
│   │   └── client-portal/      # Client portal components
│   └── shared/                 # Shared components and utilities
├── assets/                     # Static assets
└── environments/               # Environment configurations
```

## Known Issues & Solutions

### ProjectType Mapping
Backend expects lowercase underscore format:
- `'Tax Return'` → `'tax_return'`
- `'Quarterly Filing'` → `'quarterly_filing'`
- `'Business Setup'` → `'business_setup'`

Mapping is handled in `ClientProjectsComponent.projectTypeMap`.

### Deployment
Always use the dual package.json strategy. Do not attempt Heroku auto-builds.
