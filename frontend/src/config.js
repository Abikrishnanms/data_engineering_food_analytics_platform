// API Base URL configuration
// In development: defaults to '' (proxied by Vite to http://127.0.0.1:8000)
// In production on Vercel: can be set via VITE_API_BASE_URL or proxied via vercel.json
export const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

