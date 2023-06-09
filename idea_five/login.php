<?php

session_start();

if (isset($_SESSION['error'])) {
    echo $_SESSION['error'];
    unset($_SESSION['error']);
}
if (isset($_SESSION['logout'])) {
    echo $_SESSION['logout'];
    unset($_SESSION['logout']);
}

?>

<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="styles1.css">
</head>
<body>
  <div class="container">
    <h2>Login</h2>
    <form action="login_check.php" method="POST">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Log in</button>
    </form>
    <p>Don't have an account? <a href="index.php">Sign up</a></p>
  </div>
</body>
</html>

