//on enter, spin

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const url = 'http://localhost:5000/update-duration';
    const data = { duration: '10' };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // should print {'success': true}
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});

