# Backend

### Installation Backend ONLY

1. Get a free API Key at [https://myanimelist.net/apiconfig](https://myanimelist.net/apiconfig)
2. Enter your API in `.env` (root directory)
   ```
   MAL_CLIENT_ID = 'ENTER YOUR API';
   ```
4. Run using Docker
   ```
   docker build -t va_finder_backend .
   docker run -it va_finder_backend
   ```