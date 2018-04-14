const CURRENT_YEAR = new Date().getFullYear();
const JSON_SERVER = process.env.NODE_ENV === 'home' 
                    ? "http://localhost:3004" 
                    : 'https://json-server-cowboy8038.c9users.io';

export { CURRENT_YEAR, JSON_SERVER };
