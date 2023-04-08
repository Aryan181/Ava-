import requests
from bs4 import BeautifulSoup

# prompt the user for the duration value
duration = input('Enter animation duration (in seconds): ')

# make an HTTP POST request to the Flask endpoint
response = requests.post('http://localhost:5000/update-duration', data={'duration': duration})
if response.ok:
    print(f'Animation duration updated to {duration} seconds.')
else:
    print('Failed to update animation duration:', response.json()['error'])

# update the animation duration in the HTML file

