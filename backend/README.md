# Backend

### Installation Backend ONLY

1. Get a free API Key at [https://myanimelist.net/apiconfig](https://myanimelist.net/apiconfig)
2. Enter your API in `.env` (root directory)
   ```
   MAL_CLIENT_ID = 'ENTER YOUR API';
   ```
3. Install and run

   i. Using Docker
      ```
      docker build -t va_finder_backend .
      docker run -it va_finder_backend
      ```
   
   ii. Using Poetry
      ```
      poetry install
      poetry shell
      uvicorn index:app --reload
      ```
   
   iii. Using Venv
      ```
      python3 -m venv venv
      source venv/bin/activate
      pip install -r requirements.txt
      uvicorn index:app --reload
      ```
