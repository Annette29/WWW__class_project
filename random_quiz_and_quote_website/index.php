<?php
session_start();
// Check if an error message exists in the session
if (isset($_SESSION['error1'])) {
    // Display the error message as a div element
    echo "<div class='error-message'>{$_SESSION['error1']}</div>";
    // Clear the error message from the session
    unset($_SESSION['error1']);
}

if (isset($_SESSION['error2'])) {
    echo "<div class='error-message'>{$_SESSION['error2']}</div>";
    unset($_SESSION['error2']);
}
if (isset($_SESSION['error3'])) {
    echo "<div class='error-message'>{$_SESSION['error3']}</div>";
    unset($_SESSION['error3']);
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Signup</title>
  <link rel="stylesheet" type="text/css" href="styles1.css">
</head>
<body>
  <div class="container">
    <h2>Signup</h2>
    <form action="signup.php" method="POST">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Sign up</button>   
    </form>
    <p>Already have an account? <a href="login.php">Log in</a></p>
  </div>
</body>
</html>
