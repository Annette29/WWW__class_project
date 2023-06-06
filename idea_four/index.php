<?php
session_start();
if (isset($_SESSION['error1'])) {
    echo $_SESSION['error1'];
    unset($_SESSION['error1']);
}
if (isset($_SESSION['error2'])) {
    echo $_SESSION['error2'];
    unset($_SESSION['error2']);
}
if (isset($_SESSION['error3'])) {
    echo $_SESSION['error3'];
    unset($_SESSION['error3']);
}
?>


<!DOCTYPE html>
<html>
<head>
    <title>Signup</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Signup</h2>
        <form action="signup.php" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <input type="submit" value="Signup">
        </form>
    </div>
</body>
</html>
