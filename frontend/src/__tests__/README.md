# Testing Directory

This directory contains all test files for the frontend application.

## Structure

- `landing_page/` - Tests for landing page components
  - `Navbar.test.jsx` - Navbar component tests
  - `HomePage.test.jsx` - HomePage component tests

## Running Tests

```bash
npm test
```

## Writing Tests

When adding new tests, follow this structure:
1. Place test files in `__tests__` directory mirroring the source structure
2. Use `.test.jsx` or `.test.js` naming convention
3. Import necessary testing utilities from `@testing-library/react`
4. Use descriptive test names and organize with `describe` blocks

## Testing Best Practices

- Test user-facing behavior, not implementation details
- Use `screen` queries instead of `container.querySelector()`
- Wrap components using React Router with `<BrowserRouter>`
- Mock external dependencies as needed
