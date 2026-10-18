# frame-client

A lightweight React + Vite client for the Frame app ecosystem.

This project boots a UI shell with Redux state, shared UI components, and a live WebSocket connection to the server.

## Features
- React client powered by Vite
- Redux store and middleware setup
- UI framework shell with top/bottom bars and modal/layout components
- Server health checks and WebSocket communication

## Quick start

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

## Notes
- Requires Node 24.x
- The app expects a Frame server to be available for live data and socket traffic
