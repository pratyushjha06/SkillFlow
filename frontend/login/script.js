function toggleAuth(type) {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const buttons = document.querySelectorAll('.auth-toggle button');

    buttons.forEach(btn => btn.classList.remove('active'));

    if (type === 'signin') {
        signinForm.classList.add('active');
        signupForm.classList.remove('active');
        buttons[0].classList.add('active');
    } else {
        signupForm.classList.add('active');
        signinForm.classList.remove('active');
        buttons[1].classList.add('active');
    }
}

async function handleAuth(event, type) {
    event.preventDefault();

    const email = document.getElementById(`${type}-email`).value;
    const password = document.getElementById(`${type}-password`).value;

    const endpoint = type === 'signup'
        ? 'http://localhost:5000/api/auth/register'
        : 'http://localhost:5000/api/auth/login';

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(`${type === 'signup' ? 'Signed up' : 'Signed in'} successfully!`);
            localStorage.setItem('token', data.token);
            // Redirect if needed:
            // window.location.href = '/dashboard.html';
        } else {
            alert(data.message || 'Authentication failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Could not connect to the server.');
    }
}

function googleLogin() {
    alert('Google login functionality is coming soon.');
}