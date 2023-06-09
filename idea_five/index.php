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
