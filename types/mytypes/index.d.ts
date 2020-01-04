// Type package for own global type definitions
interface HelloWorldResponse {
  message: string;
}

interface ManagerUser {
  name: string
  pin: number
}

declare module 'plex-api';
declare module 'plex-api-credentials';
