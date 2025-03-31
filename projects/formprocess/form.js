document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    if (!firstname) {
        alert('Please add your first name so we know what to call you.');
        return;
    }

    if (!lastname) {
        alert('Please indicate your last name so we know what to call you.');
        return;
    }

    if (!username) {
        alert('Add a Username for your account.');
        return;
    }

    if (!password || password.length <=7) {
        alert('Choose a password 8 characters or more.');
        return;
    }

    if (phone.length <= 9) {
        alert('You are missing a few digits on your phone number. Please add your complete phone number.');
        return;
    }

    const formData = {
        firstName: firstname,
        lastName: lastname,
        username: username,
        password: password,
        phone: phone
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = '';
        } else if (xhr.readyState === 4) {
            alert('Error Submitting Form.');
        }   
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});