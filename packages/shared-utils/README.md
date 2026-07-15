# @enterprise/shared-utils

Shared utility functions for the enterprise microfrontend application.

## Features

- ✅ Validation utilities (email, password, phone, URL, etc.)
- ✅ String formatting (capitalize, slugify, camelCase, snakeCase)
- ✅ Number and currency formatting
- ✅ Storage utilities (localStorage, sessionStorage)
- ✅ Date and time utilities
- ✅ HTTP utilities (debounce, throttle, retry)

## Usage

```typescript
import {
  validateEmail,
  formatCurrency,
  storage,
  formatDate,
  debounce
} from '@enterprise/shared-utils';

// Validation
if (validateEmail('user@example.com')) {
  console.log('Valid email');
}

// Formatting
const price = formatCurrency(100, 'USD'); // $100.00

// Storage
storage.set('user', { name: 'John' });
const user = storage.get('user');

// Date utilities
const formatted = formatDate(new Date(), 'MM/DD/YYYY');

// HTTP utilities
const debouncedSearch = debounce((query) => {
  console.log('Searching:', query);
}, 500);
```

## API Reference

### Validators
- `validateEmail(email: string): boolean`
- `validatePassword(password: string): boolean`
- `validatePasswordStrength(password: string): { score, feedback }`
- `validatePhoneNumber(phone: string): boolean`
- `validateUrl(url: string): boolean`
- `validateZipCode(zipCode: string): boolean`

### Formatters
- `formatCurrency(amount: number, currency?: string): string`
- `formatNumber(num: number, decimals?: number): string`
- `formatPercent(num: number, decimals?: number): string`
- `formatFileSize(bytes: number): string`
- `abbreviateNumber(num: number): string`

### String Utils
- `capitalize(str: string): string`
- `capitalizeWords(str: string): string`
- `truncate(str: string, length: number): string`
- `slugify(str: string): string`
- `camelCase(str: string): string`
- `snakeCase(str: string): string`
- `removeSpecialChars(str: string): string`
- `extractNumbers(str: string): string`

### Storage
- `storage.get<T>(key: string, defaultValue?: T): T | null`
- `storage.set<T>(key: string, value: T): void`
- `storage.remove(key: string): void`
- `storage.clear(): void`
- `storage.has(key: string): boolean`

### Date Utils
- `formatDate(date: Date | string, format?: string): string`
- `formatTime(date: Date | string, format?: string): string`
- `formatDateTime(date: Date | string, dateFormat?: string, timeFormat?: string): string`
- `getTimeAgo(date: Date | string): string`
- `addDays(date: Date, days: number): Date`
- `isToday(date: Date | string): boolean`

### HTTP Utils
- `buildQueryString(params: Record<string, any>): string`
- `buildUrl(baseUrl: string, params?: Record<string, any>): string`
- `parseQueryString(query: string): Record<string, string>`
- `sleep(ms: number): Promise<void>`
- `retry<T>(fn: () => Promise<T>, attempts?: number, delay?: number): Promise<T>`
- `debounce<T>(func: T, wait: number): (...args) => void`
- `throttle<T>(func: T, wait: number): (...args) => void`
