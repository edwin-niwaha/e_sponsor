# e_sponsor
_A sponsorship management system  with web and mobile apps developed in Django and React Js_

## Requirements
Make sure you have python and Node js installed on your system:
- [Python version 3.9.13](https://www.python.org/downloads/release/python-3913/) 
- [Node version 16.7.1](https://nodejs.org/en/download/)


## Project Setup

- Clone the repository in a local folder
```bash
    git clone https://github.com/edwin-niwaha
    ```
- Open terminal and verify python version
  ```bash
    python --version
    ```
- Verify if node and npm are installed
  ```bash
    node --version
    npm -version
    ```
## Setup Backend
- Nvaigate to cloned project directory
  ```bash
    cd e_sponsor/e_sponsor
    ```
- Create a python virtual environment for backend
  ```bash
    $ python -m venv .venv
    ```
- Activate the virtual environment
  ```bash
  # For winodws
    source .venv/Scripts/activate
  # For linux
    source .venv/bin/activate
    ```
- Install python libraries
  ```bash
   cd backend
   pip install -r requirements.txt
    ```
- Start Django server
  ```bash
   python manage.py runserver
    ```
- Django backend server will start on http://localhost:8000/

## Setup Frontend
- Open a new terminal and navigate to frontend directory
  ```bash
   cd e_sponsor/frontend/e_sponsor-web
    ```
- Install frontend libraries using npm
  ```bash
   npm install
    ```
- Start Node server
  ```bash
   npm start
    ```
- Once node is started you can access the application on http://localhost:3000/
