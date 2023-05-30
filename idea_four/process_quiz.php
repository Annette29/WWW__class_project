<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Connect to the MySQL database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "second_quiz";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the statement for inserting quiz responses
    $stmt = $conn->prepare("INSERT INTO quiz_questions (question, option1, option2, option3, option4) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $question, $option1, $option2, $option3, $option4);

    // Process the quiz answers
    $answers = [
        $_POST['q1'],
        $_POST['q2'],
        $_POST['q3'],
        $_POST['q4'],
        $_POST['q5'],
        $_POST['q6'],
        $_POST['q7'],
    ];

    $question = "What is your favorite ice cream flavor?";
    $option1 = "Chocolate";
    $option2 = "Vanilla";
    $option3 = "Strawberry";
    $option4 = "Mint Chocolate Chip";
    $stmt->execute();

    $question = "What is your favorite movie genre?";
    $option1 = "Action";
    $option2 = "Comedy";
    $option3 = "Drama";
    $option4 = "Horror";
    $stmt->execute();

    $question = "What is your favorite TV show?";
    $option1 = "Friends";
    $option2 = "The Office";
    $option3 = "Game of Thrones";
    $option4 = "Stranger Things";
    $stmt->execute();

    $question = "What is your favorite book genre?";
    $option1 = "Romance";
    $option2 = "Mystery";
    $option3 = "Science Fiction";
    $option4 = "Fantasy";
    $stmt->execute();

    $question = "What is your favorite hobby?";
    $option1 = "Reading";
    $option2 = "Watching Movies";
    $option3 = "Playing Video Games";
    $option4 = "Traveling";
    $stmt->execute();

    $question = "What is your favorite animal?";
    $option1 = "Dog";
    $option2 = "Cat";
    $option3 = "Bird";
    $option4 = "Fish";
    $stmt->execute();

    $question = "What is your favorite season?";
    $option1 = "Spring";
    $option2 = "Summer";
    $option3 = "Fall";
    $option4 = "Winter";
    $stmt->execute();

    $stmt->close();
    $conn->close();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Survey Answers</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="pimg1">
    <div class="ptext1">
        <span class="boder">
          Here are your answers!
        </span>
    </div>
    <div class=".ptext2">
      <?php
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
          foreach ($answers as $answer) {
            echo $answer . '<br>';
          }
        } else {
          echo "No quiz answers submitted.";
        }
      ?>
    </div>
  </div>
</body>
</html>
