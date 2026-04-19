# Intervals.icu API Client

This is a generated Node.js/TypeScript client for the Intervals.icu API.

## Installation

```bash
npm install
```

## Usage

```typescript
import { AktivitTenService, OpenAPI } from './index';

// Configure the API client
OpenAPI.BASE = 'https://intervals.icu';
OpenAPI.TOKEN = 'your-api-token'; // or use API key

// Example: Get activities
const activities = await AktivitTenService.getActivities();
console.log(activities);
```

## Authentication

The API supports two authentication methods:

### API Key (Basic Auth)
```typescript
import { OpenAPI } from './index';

OpenAPI.USERNAME = 'API_KEY';
OpenAPI.PASSWORD = 'your-api-key'; // Found in /settings
```

### Access Token (Bearer)
```typescript
import { OpenAPI } from './index';

OpenAPI.TOKEN = 'your-access-token'; // From OAuth flow
```

## Services

The client provides services for all API endpoints:
- AktivitTenService (Activities)
- AthletenService (Athletes)
- ChatsService (Chats)
- And more...

## Building

```bash
npm run build
```

This will compile the TypeScript to JavaScript in the `dist` directory.</content>
<parameter name="filePath">/home/maxrg/git/intervals/client/README.md