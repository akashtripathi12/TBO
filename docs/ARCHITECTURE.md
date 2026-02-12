# TBO Platform - Architecture Documentation

## 📋 Table of Contents
- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Directory Details](#directory-details)
- [Architectural Patterns](#architectural-patterns)
- [Import Aliases](#import-aliases)
- [Development Guidelines](#development-guidelines)

---

## Overview

TBO (Travel Booking Operations) is an enterprise-grade SaaS platform for managing MICE (Meetings, Incentives, Conferences, and Exhibitions) events and destination weddings. The platform provides comprehensive group inventory management, booking coordination, and post-booking intelligence.

**Key Features:**
- Event management and coordination
- Hotel inventory and room allocation
- Guest management and portal access
- Flight booking integration
- Post-booking analytics and intelligence
- Real-time booking status tracking

---

## Technology Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **State Management** | React Context API |
| **UI Components** | Custom component library with CVA |
| **Package Manager** | npm |

---

## Project Structure

```
tbo/
├── src/                          # Source code directory
│   ├── app/                      # Next.js App Router (routes only)
│   ├── modules/                  # Domain-driven feature modules
│   ├── components/               # Reusable UI components
│   ├── context/                  # React Context providers
│   ├── hooks/                    # Global custom hooks
│   ├── services/                 # API and business logic services
│   ├── utils/                    # Utility functions
│   ├── config/                   # Configuration and constants
│   ├── types/                    # Global TypeScript types
│   └── lib/                      # Backward compatibility layer
├── public/                       # Static assets
├── docs/                         # Documentation files
├── .next/                        # Next.js build output
└── node_modules/                 # Dependencies
```

---

## Directory Details

### 📁 `src/app/` - Next.js App Router

**Purpose:** Contains all application routes using Next.js 16 App Router conventions.

**Structure:**
```
app/
├── layout.tsx                    # Root layout with providers
├── page.tsx                      # Homepage
├── globals.css                   # Global styles
├── dashboard/                    # Dashboard route
│   ├── layout.tsx               # Dashboard layout
│   └── page.tsx                 # Dashboard page
├── events/[eventId]/            # Dynamic event routes
│   ├── layout.tsx               # Event layout with navigation
│   ├── page.tsx                 # Event details
│   ├── guests/                  # Guest management
│   ├── hotels/                  # Hotel selection
│   ├── inventory/               # Inventory management
│   ├── room-mapping/            # Room allocation
│   ├── flights/                 # Flight booking
│   ├── analytics/               # Event analytics
│   ├── post-booking/            # Post-booking intelligence
│   └── portal/[guestId]/        # Guest portal
├── login/                       # Authentication routes
│   ├── agent/                   # Agent login
│   └── guest/                   # Guest login
└── analytics/                   # Global analytics
```

**Key Principles:**
- Routes are defined by folder structure
- Each route can have `page.tsx` (UI) and `layout.tsx` (shared layout)
- Dynamic routes use `[param]` syntax
- Layouts are nested and composable

---

### 📁 `src/modules/` - Domain Modules

**Purpose:** Domain-driven feature modules that encapsulate business logic, types, and services for specific domains.

**Structure:**
```
modules/
├── dashboard/
│   └── services/
│       └── mockData.ts          # Dashboard metrics data
├── events/
│   ├── types.ts                 # Event-specific types
│   └── services/
│       └── mockData.ts          # Event data
├── inventory/
│   ├── types.ts                 # Inventory types
│   └── utils/
│       └── inventoryRisk.ts     # Risk calculation logic
├── booking/                     # Booking domain (future)
├── analytics/                   # Analytics domain (future)
└── post-booking/                # Post-booking domain (future)
```

**Guidelines:**
- Each module is self-contained
- Business logic stays within the module
- Types are co-located with their domain
- Services handle data fetching and transformation

---

### 📁 `src/components/` - UI Components

**Purpose:** Reusable UI components organized by category.

**Structure:**
```
components/
├── ui/                          # Core UI components
│   ├── Badge/
│   │   ├── Badge.tsx           # Badge component
│   │   ├── types.ts            # Badge types and variants
│   │   └── index.ts            # Barrel export
│   ├── Button/
│   │   ├── Button.tsx          # Button component
│   │   ├── types.ts            # Button variants
│   │   └── index.ts
│   ├── Card/
│   │   ├── Card.tsx            # Base card
│   │   ├── MetricCard.tsx      # Metric display card
│   │   └── index.ts
│   ├── EventCard/
│   │   ├── EventCard.tsx       # Main event card
│   │   ├── EventCardHeader.tsx # Card header subcomponent
│   │   ├── EventCardMetrics.tsx# Card metrics subcomponent
│   │   └── index.ts
│   └── index.ts                # UI components barrel export
├── layout/                      # Layout components (future)
├── feedback/                    # Feedback components (future)
└── legacy/                      # Legacy components during migration
    ├── auth/
    │   ├── ProtectedRoute.tsx
    │   └── LogoutButton.tsx
    ├── portal/
    │   ├── PortalHeader.tsx
    │   ├── GuestList.tsx
    │   └── VenueShowcaseCard.tsx
    ├── Navigation.tsx
    ├── Sidebar.tsx
    ├── EventModal.tsx
    └── RoomAssignmentManager.tsx
```

**Component Patterns:**

#### UI Components
- Use **CVA (Class Variance Authority)** for variants
- Implement **React.memo** for performance
- Export types alongside components
- Use barrel exports (`index.ts`) for clean imports

**Example:**
```typescript
// components/ui/Badge/Badge.tsx
import { cva } from 'class-variance-authority';
import { BadgeProps } from './types';

const badgeVariants = cva(/* ... */);

export const Badge = React.memo(({ variant, size, label }: BadgeProps) => {
  // Component implementation
});
```

#### Legacy Components
- Components from the old structure
- Will be refactored to new patterns over time
- Import from `@/components/legacy/`

---

### 📁 `src/context/` - React Context

**Purpose:** Global state management using React Context API.

**Structure:**
```
context/
├── AuthContext.tsx              # Authentication state
├── EventContext.tsx             # Event management state
├── SidebarContext.tsx           # Sidebar UI state
└── index.ts                     # Context barrel export
```

**Context Pattern:**
```typescript
// Minimal state storage
// Business logic in services/hooks
// Export provider and custom hook

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(/* ... */);
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
```

---

### 📁 `src/hooks/` - Custom Hooks

**Purpose:** Reusable React hooks for common functionality.

**Guidelines:**
- Prefix with `use` (e.g., `useDebounce`, `useLocalStorage`)
- Keep hooks focused and composable
- Document parameters and return values

---

### 📁 `src/services/` - Services Layer

**Purpose:** API calls, data fetching, and business logic services.

**Future Structure:**
```
services/
├── api/
│   ├── events.ts               # Event API calls
│   ├── bookings.ts             # Booking API calls
│   └── analytics.ts            # Analytics API calls
├── auth/
│   └── authService.ts          # Authentication service
└── storage/
    └── localStorage.ts         # Local storage utilities
```

---

### 📁 `src/utils/` - Utilities

**Purpose:** Pure utility functions used across the application.

**Structure:**
```
utils/
├── classNames.ts               # Tailwind class merging utility
├── dateFormatters.ts           # Date formatting functions
├── numberFormatters.ts         # Number formatting functions
└── index.ts                    # Utilities barrel export
```

**Example:**
```typescript
// utils/dateFormatters.ts
export const formatDateRange = (start: string, end: string): string => {
  // Implementation
};

// utils/numberFormatters.ts
export const formatCurrency = (amount: number): string => {
  return `₹${amount.toLocaleString('en-IN')}`;
};
```

---

### 📁 `src/config/` - Configuration

**Purpose:** Application configuration, constants, and static data.

**Structure:**
```
config/
├── routes.ts                   # Route constants
├── statusConfig.ts             # Status configurations
├── constants.ts                # Global constants
└── index.ts                    # Config barrel export
```

**Example:**
```typescript
// config/routes.ts
export const ROUTES = {
  DASHBOARD: '/dashboard',
  EVENT: (id: string) => `/events/${id}`,
  EVENT_GUESTS: (id: string) => `/events/${id}/guests`,
};

// config/statusConfig.ts
export const STATUS_CONFIG = {
  confirmed: { color: 'green', label: 'Confirmed' },
  pending: { color: 'yellow', label: 'Pending' },
  cancelled: { color: 'red', label: 'Cancelled' },
};
```

---

### 📁 `src/types/` - TypeScript Types

**Purpose:** Global TypeScript type definitions and interfaces.

**Structure:**
```
types/
├── index.ts                    # Global types
└── [domain].ts                 # Domain-specific types (if needed)
```

**Example:**
```typescript
// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'agent' | 'guest';
}

export interface Event {
  id: string;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  status: EventStatus;
}

export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
```

---

### 📁 `src/lib/` - Backward Compatibility

**Purpose:** Temporary layer for backward compatibility during migration.

**Structure:**
```
lib/
└── mockData.ts                 # Re-exports from domain modules
```

**Note:** This directory will be removed once migration is complete.

---

## Architectural Patterns

### 1. **Domain-Driven Design (DDD)**

The application is organized around business domains:
- **Dashboard** - Metrics and overview
- **Events** - Event management
- **Inventory** - Room and resource allocation
- **Booking** - Reservation management
- **Analytics** - Data insights
- **Post-Booking** - Post-event intelligence

**Benefits:**
- Clear separation of concerns
- Easier to scale and maintain
- Domain experts can understand the code structure
- Reduces coupling between features

---

### 2. **Component Composition**

UI components are broken down into smaller, reusable pieces:

```typescript
// Instead of one large component:
<EventCard event={event} />

// We compose smaller components:
<EventCard>
  <EventCardHeader event={event} />
  <EventCardMetrics event={event} />
</EventCard>
```

**Benefits:**
- Better reusability
- Easier testing
- Improved performance (granular memoization)
- Clearer component responsibilities

---

### 3. **Centralized Configuration**

All configuration lives in `src/config/`:
- Routes
- Status mappings
- Constants
- Theme values

**Benefits:**
- Single source of truth
- Easy to update across the app
- Type-safe configuration
- Consistent behavior

---

### 4. **Type Safety**

TypeScript is used throughout with strict mode enabled:
- All props are typed
- API responses are typed
- State is typed
- Utility functions are typed

**Benefits:**
- Catch errors at compile time
- Better IDE autocomplete
- Self-documenting code
- Safer refactoring

---

## Import Aliases

TypeScript path aliases are configured for clean imports:

| Alias | Path | Usage |
|-------|------|-------|
| `@/app/*` | `src/app/*` | App routes |
| `@/modules/*` | `src/modules/*` | Domain modules |
| `@/components/*` | `src/components/*` | UI components |
| `@/context/*` | `src/context/*` | React contexts |
| `@/hooks/*` | `src/hooks/*` | Custom hooks |
| `@/services/*` | `src/services/*` | Services |
| `@/utils/*` | `src/utils/*` | Utilities |
| `@/config/*` | `src/config/*` | Configuration |
| `@/types/*` | `src/types/*` | Type definitions |
| `@/lib/*` | `src/lib/*` | Legacy compatibility |

**Example:**
```typescript
// ❌ Avoid relative imports
import { Button } from '../../../components/ui/Button';

// ✅ Use path aliases
import { Button } from '@/components/ui/Button';
```

---

## Development Guidelines

### Adding a New Feature

1. **Identify the domain** - Which module does it belong to?
2. **Create types** - Define interfaces in `modules/[domain]/types.ts`
3. **Build components** - Create UI components in `components/ui/`
4. **Add routes** - Create pages in `app/`
5. **Implement logic** - Add services in `modules/[domain]/services/`
6. **Update config** - Add routes/constants to `config/`

### Creating a New Component

1. **Create component folder** in `components/ui/[ComponentName]/`
2. **Add component file** - `ComponentName.tsx`
3. **Define types** - `types.ts` with props and variants
4. **Add barrel export** - `index.ts` for clean imports
5. **Use CVA for variants** - Define variant styles
6. **Optimize with memo** - Wrap with `React.memo` if appropriate

**Example:**
```
components/ui/Select/
├── Select.tsx
├── types.ts
└── index.ts
```

### Adding a New Route

1. **Create folder** in `app/[route-name]/`
2. **Add page.tsx** - The route UI
3. **Add layout.tsx** (optional) - Shared layout for nested routes
4. **Update route config** - Add to `config/routes.ts`
5. **Add navigation** - Update Navigation/Sidebar components

### State Management

1. **Local state** - Use `useState` for component-specific state
2. **Shared state** - Use Context for cross-component state
3. **Server state** - Use Next.js server components when possible
4. **Form state** - Use controlled components

### Styling Guidelines

1. **Use Tailwind classes** - Utility-first approach
2. **Extract repeated patterns** - Create components for common patterns
3. **Use CVA for variants** - Type-safe variant management
4. **Responsive design** - Mobile-first approach
5. **Dark mode ready** - Use semantic color tokens

---

## File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| **Components** | PascalCase | `EventCard.tsx` |
| **Utilities** | camelCase | `dateFormatters.ts` |
| **Types** | PascalCase | `Event`, `User` |
| **Constants** | UPPER_SNAKE_CASE | `MAX_GUESTS` |
| **Hooks** | camelCase with `use` prefix | `useAuth.ts` |
| **Routes** | kebab-case | `post-booking/` |

---

## Testing Strategy (Future)

```
src/
├── __tests__/                  # Test files
│   ├── components/
│   ├── utils/
│   └── services/
```

**Planned Testing:**
- Unit tests for utilities and services
- Component tests for UI components
- Integration tests for critical flows
- E2E tests for user journeys

---

## Performance Optimizations

1. **React.memo** - Memoize expensive components
2. **Code splitting** - Dynamic imports for large components
3. **Image optimization** - Next.js Image component
4. **Server components** - Use RSC when possible
5. **Lazy loading** - Load components on demand

---

## Security Considerations

1. **Authentication** - Protected routes with `ProtectedRoute` component
2. **Role-based access** - Agent vs Guest permissions
3. **Input validation** - Validate all user inputs
4. **XSS prevention** - Sanitize user-generated content
5. **CSRF protection** - Use Next.js built-in protections

---

## Deployment

**Build Command:**
```bash
npm run build
```

**Development Server:**
```bash
npm run dev
```

**Production Server:**
```bash
npm start
```

---

## Migration Status

### ✅ Completed
- Enterprise folder structure
- UI component library (Badge, Button, Card, EventCard)
- Context migration (Auth, Event, Sidebar)
- Type definitions
- Configuration layer
- Import path updates

### 🚧 In Progress
- Legacy component refactoring
- Service layer implementation
- Hook library expansion

### 📋 Planned
- Layout components
- Feedback components
- Testing infrastructure
- API integration
- Error boundaries
- Loading states

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [CVA Documentation](https://cva.style/docs)

---

## Support

For questions or issues, please refer to:
- Project README: `README.md`
- Walkthrough: `brain/walkthrough.md`
- Implementation Plan: `brain/implementation_plan.md`

---

**Last Updated:** February 12, 2026  
**Version:** 1.0.0  
**Architecture:** Enterprise SaaS
