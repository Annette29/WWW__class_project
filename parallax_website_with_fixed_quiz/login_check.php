<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the form data
    $usernameprov = $_POST['username'];
    $passwordprov = $_POST['password'];

    echo $usernameprov;
    echo $password;

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
    $stmt->bind_param("s", $usernameprov);

    // Execute the SQL statement
    $stmt->execute();

    // Fetch the result
    $result = $stmt->get_result();
    // Check if a matching user was found
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $storedPassword = $row['password'];

        // Verify the password

        if($passwordprov === $storedPassword) {
            session_start();
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
