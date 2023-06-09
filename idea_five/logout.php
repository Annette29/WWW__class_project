<?php
// Start the session
session_start();

// Check if the logout button is clicked
if(isset($_POST['logout'])) {
    // Unset all of the session variables
    $_SESSION = array();

    // Destroy the session
    session_destroy();

    // Redirect to the login page or any other page
    session_start();
    $_SESSION['logout'] = "We're sorry to see you go!
                             Come back soon!";
    header("Location: login.php");
    exit();

}
?>
