# TBO Platform - Quick Reference Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

**Development Server:** http://localhost:3000

---

## 📁 Project Structure at a Glance

```
tbo/
├── src/
│   ├── app/              # Routes (Next.js App Router)
│   ├── modules/          # Domain logic (dashboard, events, inventory, etc.)
│   ├── components/       # UI components (ui/, layout/, legacy/)
│   ├── context/          # React contexts (Auth, Event, Sidebar)
│   ├── hooks/            # Custom hooks
│   ├── services/         # API services
│   ├── utils/            # Utilities (formatters, helpers)
│   ├── config/           # Configuration (routes, constants)
│   ├── types/            # TypeScript types
│   └── lib/              # Backward compatibility
├── public/               # Static assets
└── docs/                 # Documentation
```

---

## 🎯 Common Tasks

### Creating a New Page

1. Create folder in `src/app/[route-name]/`
2. Add `page.tsx`:
```typescript
export default function MyPage() {
  return <div>My Page</div>;
}
```
3. Add to `src/config/routes.ts`

### Creating a New Component

1. Create folder: `src/components/ui/[ComponentName]/`
2. Create files:
   - `ComponentName.tsx` - Component implementation
   - `types.ts` - Props and variants
   - `index.ts` - Barrel export

**Example:**
```typescript
// MyComponent.tsx
import { MyComponentProps } from './types';

export const MyComponent = ({ children }: MyComponentProps) => {
  return <div>{children}</div>;
};

// types.ts
export interface MyComponentProps {
  children: React.ReactNode;
}

// index.ts
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './types';
```

### Adding a New Domain Module

1. Create folder: `src/modules/[domain]/`
2. Add structure:
```
[domain]/
├── types.ts              # Domain types
├── services/
│   └── mockData.ts      # Mock data
└── utils/
    └── helpers.ts       # Domain utilities
```

---

## 🔗 Import Aliases

| Alias | Path | Example |
|-------|------|---------|
| `@/components/*` | `src/components/*` | `import { Button } from '@/components/ui/Button'` |
| `@/modules/*` | `src/modules/*` | `import { Event } from '@/modules/events/types'` |
| `@/context/*` | `src/context/*` | `import { useAuth } from '@/context/AuthContext'` |
| `@/utils/*` | `src/utils/*` | `import { formatDate } from '@/utils/dateFormatters'` |
| `@/config/*` | `src/config/*` | `import { ROUTES } from '@/config/routes'` |
| `@/types/*` | `src/types/*` | `import { User } from '@/types'` |

---

## 🎨 UI Component Library

### Available Components

| Component | Path | Usage |
|-----------|------|-------|
| **Badge** | `@/components/ui/Badge` | Status indicators |
| **Button** | `@/components/ui/Button` | Action buttons |
| **Card** | `@/components/ui/Card` | Content containers |
| **MetricCard** | `@/components/ui/Card` | Dashboard metrics |
| **EventCard** | `@/components/ui/EventCard` | Event displays |

### Component Usage

```typescript
import { Badge, Button, Card, EventCard } from '@/components/ui';

// Badge
<Badge variant="success" size="sm" label="Active" />

// Button
<Button variant="primary" size="md">Click Me</Button>

// Card
<Card className="p-4">
  <h2>Title</h2>
  <p>Content</p>
</Card>

// MetricCard
<MetricCard 
  label="Total Bookings" 
  value="1,234" 
  change={12.5} 
  trend="up" 
/>

// EventCard
<EventCard event={eventData} />
```

---

## 🔐 Authentication

### Using Auth Context

```typescript
import { useAuth } from '@/context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please login</div>;
  }

  return <div>Welcome, {user?.name}!</div>;
}
```

### Protected Routes

```typescript
import ProtectedRoute from '@/components/legacy/auth/ProtectedRoute';

<ProtectedRoute requiredRole="agent">
  <AdminPanel />
</ProtectedRoute>
```

---

## 🛣️ Routing

### Route Constants

```typescript
import { ROUTES } from '@/config/routes';

// Static routes
ROUTES.DASHBOARD              // '/dashboard'
ROUTES.ANALYTICS              // '/analytics'

// Dynamic routes
ROUTES.EVENT(eventId)         // '/events/[eventId]'
ROUTES.EVENT_GUESTS(eventId)  // '/events/[eventId]/guests'
```

### Navigation

```typescript
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/config/routes';

// Using Link
<Link href={ROUTES.DASHBOARD}>Dashboard</Link>

// Using router
const router = useRouter();
router.push(ROUTES.EVENT('123'));
```

---

## 🎨 Styling

### Tailwind Classes

```typescript
// Use Tailwind utility classes
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
</div>
```

### Custom Colors

```typescript
// Corporate colors
bg-corporate-blue-100
text-corporate-blue-200

// Semantic colors
bg-success
bg-warning
bg-error
```

### Responsive Design

```typescript
// Mobile-first approach
<div className="
  text-sm          // Mobile
  md:text-base     // Tablet
  lg:text-lg       // Desktop
">
  Responsive Text
</div>
```

---

## 📊 State Management

### Local State

```typescript
import { useState } from 'react';

const [count, setCount] = useState(0);
```

### Context State

```typescript
import { useAuth } from '@/context/AuthContext';
import { useEvents } from '@/context/EventContext';
import { useSidebar } from '@/context/SidebarContext';
```

---

## 🛠️ Utilities

### Date Formatting

```typescript
import { formatDateRange, formatDate } from '@/utils/dateFormatters';

formatDateRange('2026-02-12', '2026-02-14');  // "Feb 12-14, 2026"
formatDate('2026-02-12');                      // "Feb 12, 2026"
```

### Number Formatting

```typescript
import { formatNumber, formatCurrency } from '@/utils/numberFormatters';

formatNumber(1234);         // "1,234"
formatCurrency(1234);       // "₹1,234"
```

### Class Names

```typescript
import { cn } from '@/utils/classNames';

cn('base-class', condition && 'conditional-class', 'another-class');
```

---

## 📝 TypeScript Types

### Common Types

```typescript
import { User, Event, EventStatus } from '@/types';

const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'agent'
};

const event: Event = {
  id: '1',
  name: 'Wedding Event',
  location: 'Jaipur',
  startDate: '2026-02-12',
  endDate: '2026-02-14',
  status: 'upcoming'
};
```

---

## 🐛 Common Issues

### Import Errors

**Problem:** `Cannot find module '@/components/...'`

**Solution:** Use the correct import alias:
```typescript
// ❌ Wrong
import { Button } from '@/components/Button';

// ✅ Correct
import { Button } from '@/components/ui/Button';
```

### Hydration Errors

**Problem:** Text content does not match server-rendered HTML

**Solution:** Use `suppressHydrationWarning` for dynamic content:
```typescript
<div suppressHydrationWarning>
  {new Date().toLocaleDateString()}
</div>
```

### Context Not Found

**Problem:** `useAuth must be used within AuthProvider`

**Solution:** Ensure provider is in root layout:
```typescript
// app/layout.tsx
<AuthProvider>
  <EventProvider>
    {children}
  </EventProvider>
</AuthProvider>
```

---

## 📚 File Naming

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `EventCard.tsx` |
| Utilities | camelCase | `dateFormatters.ts` |
| Routes | kebab-case | `post-booking/` |
| Constants | UPPER_SNAKE_CASE | `MAX_GUESTS` |

---

## 🔍 Useful Commands

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Format code (if configured)
npm run format

# Clear Next.js cache
rm -rf .next
```

---

## 📖 Documentation

- **Architecture:** `docs/ARCHITECTURE.md` - Detailed architecture guide
- **Walkthrough:** `brain/walkthrough.md` - Implementation walkthrough
- **Tasks:** `brain/task.md` - Task tracking
- **README:** `README.md` - Project overview

---

## 🎯 Best Practices

1. ✅ **Use TypeScript** - Type everything
2. ✅ **Import aliases** - Use `@/` instead of relative paths
3. ✅ **Component composition** - Break down large components
4. ✅ **Memoization** - Use `React.memo` for expensive components
5. ✅ **Centralized config** - Use `config/` for constants
6. ✅ **Domain modules** - Keep business logic in modules
7. ✅ **Barrel exports** - Use `index.ts` for clean imports
8. ✅ **Responsive design** - Mobile-first approach

---

## 🚀 Next Steps

1. Review `docs/ARCHITECTURE.md` for detailed documentation
2. Explore `src/components/ui/` for component examples
3. Check `src/modules/` for domain organization
4. Read `brain/walkthrough.md` for implementation details

---

**Quick Links:**
- Development: http://localhost:3000
- Dashboard: http://localhost:3000/dashboard
- Login: http://localhost:3000/login/agent

**Last Updated:** February 12, 2026
