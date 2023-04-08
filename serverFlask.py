from flask import Flask, send_file
import time
import random
from flask import request
from bs4 import BeautifulSoup
from flask_cors import CORS  # import the CORS module

app = Flask(__name__)
CORS(app)  # enable CORS for all routes



@app.route('/update-duration', methods=['POST'])
def update_duration():
    print("server hit!")
    global duration
    duration = 1

    with open('index.html', 'r') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    loader = soup.find('div', {'class': 'loader'})
    loader['style'] = f'animation-duration: {duration}s;'


    with open('index.html', 'r') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    loader = soup.find('div', {'class': 'loader'})
    loader['style'] = f'animation-duration: {duration}s;'

    with open('index.html', 'w') as f:
        f.write(str(soup))

    return {'success': True}

@app.route('/get-duration', methods=['GET'])
def get_duration():
    return {'duration': duration}

@app.route('/index.html')
def index():
    cache_bust = int(time.time() * 1000) + random.randint(1, 1000)
    return send_file('index.html', cache_timeout=0, query_string={'cache_bust': cache_bust})

if __name__ == '__main__':
    app.run()
