# Backend

### Installation

1. Get a free API Key at [https://myanimelist.net/apiconfig](https://myanimelist.net/apiconfig)
2. Enter your API in `.env` (root directory)
   ```
   MAL_CLIENT_ID = 'ENTER YOUR API';
   ```
3. Create virtual environment
   ```
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
4. Run
   ```
   uvicorn main:app --reload
   ```
