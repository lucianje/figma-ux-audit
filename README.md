# figma-ux-audit

Exports Figma design tokens and runs automated UI accessibility and consistency checks.

## Installation

```bash
npm install figma-ux-audit
```

## Quick Start

```typescript
import { FigmaUxAudit } from "figma-ux-audit";

const instance = new FigmaUxAudit();
const result = await instance.run();
console.log(result);
```

## Features

- Figma token export (colors, typography, spacing) to JSON
- Rule-based checks for contrast, tap targets, and text sizing
- CI-friendly report output (JUnit/JSON/Markdown)

## API Reference

### `FigmaUxAudit`

#### Constructor

```typescript
new FigmaUxAudit(options?: FigmaUxAuditOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<FigmaUxAuditResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
