const hostUrl = 'https://blackpolitico-api-heroku.herokuapp.com';
const signUp = () => {
  const signupurl = `${hostUrl}/api/v2/auth/signup`;
  fetch(signupurl, {
    method: 'POST',
    body: JSON.stringify({
      firstname: document.getElementById('first-name').value,
      lastname: document.getElementById('last-name').value,
      othername: document.getElementById('other-name').value,
      email: document.getElementById('email-address').value,
      password: document.getElementById('password').value,
      phoneNumber: document.getElementById('phone-number').value,
      passportUrl: document.getElementById('passport-url').value,

    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then((res) => {
      if (res.status === 201) {
        window.location.replace('../dashboard/dash_user.html');
      } else {
        alert(res.error);
      }
    });
};
