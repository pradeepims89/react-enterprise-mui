# AI Agent Instructions for React Enterprise MUI Template

## Project Architecture

This is a React 18 enterprise template using TypeScript, Redux Toolkit, and Material UI. The project follows a feature-based architecture pattern.

### Key Structure
- `/src/features/*` - Feature modules containing all related components, state, and API logic
- `/src/app` - Core application setup (Redux store)
- `/src/components` - Shared components
- `/src/types` - TypeScript interfaces
- `/src/hooks` - Custom hooks, including typed Redux hooks

### Data Flow Patterns
1. State Management:
   - Uses Redux Toolkit for global state
   - Example slice setup in `features/users/usersSlice.ts`
   - Typed hooks in `hooks/reduxHooks.ts` for type-safe Redux usage

2. API Integration:
   - Axios for HTTP requests
   - API modules co-located with features (e.g., `features/users/usersAPI.ts`)
   - Base API URL configured per service

### Component Patterns
- Material UI (MUI) components as base building blocks
- Component structure: `UserCard.tsx` demonstrates standard component organization
- Props interfaces defined inline with components

## Development Workflow

### Key Commands
```bash
npm run dev     # Start development server
npm run build   # Production build
npm run preview # Preview production build
npm run type-check # TypeScript validation
```

### Project Conventions
1. Feature Module Structure:
   - `featureName/` directory contains:
     - `featureNameSlice.ts` - Redux state
     - `featureNameAPI.ts` - API calls
     - Component files

2. Type Safety:
   - All components and functions should be typed
   - Use interfaces from `/src/types`
   - Redux state and actions are fully typed

3. Material UI Usage:
   - Use MUI components for consistent styling
   - Theme customization in future updates

## Integration Points
- Redux store configuration in `src/app/store.ts`
- API services defined per feature
- Material UI theme provider at app root