document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    function clearErrors() {
        document.getElementById('username-warning').style.display = 'none';
        document.getElementById('password-warning').style.display = 'none';
        document.getElementById('username').style.cssText = 'border: 2px solid black; border-radius: 4px;';
        document.getElementById('password').style.cssText = 'border: 2px solid black; border-radius: 4px;';
    }

    document.getElementById('username').addEventListener('input', function() {
        clearErrors();
    });

    document.getElementById('password').addEventListener('input', function() {
        clearErrors();
    });



    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    let valid = true;

    if (username === '') {
            document.getElementById('username').style.cssText = 'border: 2px solid red; border-radius: 4px;';
            document.getElementById('username-warning').style.display='block';
        valid = false;
    }

    if (password === '') {
        document.getElementById('password').style.cssText = 'border: 2px solid red; border-radius: 4px;';
        document.getElementById('password-warning').style.display='block';
        valid = false;
    }

    if (valid){
        alert("Login Successful");
    }

});