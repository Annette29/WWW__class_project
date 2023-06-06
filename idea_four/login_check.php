<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Retrieve the user from the database
    // Connect to the database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "second_quiz";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL statement to retrieve the user
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);

    // Execute the SQL statement
    $stmt->execute();

    // Fetch the result
    $result = $stmt->get_result();

    // Check if a matching user was found
    if ($result->num_rows === 1) {
        // Retrieve the stored password
        $row = $result->fetch_assoc();
        $storedPassword = $row['password'];

        // Verify the password
        if (password_verify($password, $storedPassword)) {
            // Password is correct, set the user session
            $_SESSION['username'] = $username;
            $_SESSION['logged_in'] = true; // Set the flag
            header("Location: open_quiz.php");
            exit();
        } else {
            // Invalid password
            session_start();
            $_SESSION['error'] = "Wrong password! Try Again!";
            header("Location: login.php");
            exit();
        }
    } else {
        // No matching user found
        session_start();
        $_SESSION['error3'] = "This user does not exist. Please create a new account.";
        header("Location: index.php");
        exit();
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
