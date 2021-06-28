const handleLogin = () => {
    debugger;
    const userName = document.getElementById('username');
    const password = document.getElementById('inputPassword');
    userName.value = 'username1'
    password.value = 'password1';
    const timeout = setTimeout(() => {
        document.getElementById('goToPatients').click();
        clearInterval(timeout)
    }, 1000)
}