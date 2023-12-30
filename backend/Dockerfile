# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory to /app
WORKDIR /app

# Copy the poetry files to the container
COPY pyproject.toml poetry.lock ./

# Install poetry
RUN pip install poetry

# Install project dependencies
RUN poetry install --no-root

# Copy the rest of the application code to the container
COPY . .

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run app.py when the container launches
CMD ["poetry", "run", "uvicorn", "index:app", "--host", "0.0.0.0", "--port", "8000"]
