<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Connect to the MySQL database
    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "second_quiz";

    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if the username already exists in the database
    $stmt = $conn->prepare("SELECT username FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Username already exists, display an error message
        session_start(); 
        $_SESSION['error1'] = "This user already exists. Please choose another username.";
        header("Location: index.php");
        exit();    
    } else {
        // Username doesn't exist, insert the new user into the database
        $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $password);
        $stmt->execute();
    
        if ($stmt->affected_rows > 0) {
            // Registration successful, redirect to login page
            header("Location: open_quiz.php");
            exit(); 
        } else {
            // Error occurred, display an error message
            session_start();
            $_SESSION['error2'] = "Error: Registration failed.";
            header("Location: index.php");
            exit();
        }
    }
    

    $stmt->close();
    $conn->close();
}
?>
