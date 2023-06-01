<!DOCTYPE html>
<html>
<head>
    <title>Survey Answers</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="pimg1">
        <div class="ptext">
            <span class="boder">
                Here are your answers!
            </span>
        </div>
    </div>
    <section class="section section-dark">
        <div class="ptext1">
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

                $questions = [
                    "What is your favorite ice cream flavor?",
                    "What is your favorite movie genre?",
                    "What is your favorite TV show?",
                    "What is your favorite book genre?",
                    "What is your favorite hobby?",
                    "What is your favorite animal?",
                    "What is your favorite season?"
                ];

                $options = [
                    ["Chocolate", "Vanilla", "Strawberry", "Mint Chocolate Chip"],
                    ["Action", "Comedy", "Drama", "Horror"],
                    ["Friends", "The Office", "Game of Thrones", "Stranger Things"],
                    ["Romance", "Mystery", "Science Fiction", "Fantasy"],
                    ["Reading", "Watching Movies", "Playing Video Games", "Traveling"],
                    ["Dog", "Cat", "Bird", "Fish"],
                    ["Spring", "Summer", "Fall", "Winter"]
                ];

                for ($i = 0; $i < count($questions); $i++) {
                    $question = $questions[$i];
                    $answerIndex = intval($answers[$i]);

                    // Check if the answer index is within the valid range
                    if ($answerIndex >= 0 && $answerIndex < count($options[$i])) {
                        $questionOptions = $options[$i];
                        $option1 = $questionOptions[$answerIndex];
                    } else {
                        $option1 = "No answer provided";
                    }

                    $option2 = $options[$i][0];
                    $option3 = $options[$i][1];
                    $option4 = $options[$i][2];

                    $stmt->execute();

                    echo "<h2>Question:</h2>";
                    echo "<p>" . $question . "</p>";
                    echo "<h2>Answer:</h2>";
                    echo "<p>" . $option1 . "</p>";
                    echo "<br>";
                }

                $stmt->close();
                $conn->close();
            } else {
                echo "No quiz answers submitted.";
            }
            ?>
        </div>
    </section>
    <div class="pimg7">
        <div class="ptext">
            <span class="boder trans">
                Thank you for playing!
            </span>
        </div>
    </div>
    <form action="open_quiz.html" method="POST">
    <div class="pimg1">
      <div class="ptext">
        <span class="boder">
          <input type="submit" value="Want to give it another shot?" class="myButton">
        </span>
      </div>
    </div>
  </form>
</body>
</html>
