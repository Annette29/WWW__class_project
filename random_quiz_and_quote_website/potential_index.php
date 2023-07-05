
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
  <title>Game Quotes & Random Quizzes</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div id="main">
    <h1>Game Quotes & Quizzes</h1>
    <div class='display'>
      <p id='displayQuote'>
        <!-- quotes will show up here -->
      </p>
      <p id="game">
        <!-- name of the game from which the quote originates -->
      </p>
    </div>

    <div class='button-container'>
      <button class='button' id="quoteBtn" type="button"> Get A Quote</button>
    </div>

    <div class="button-container">
      <button class="button" id="quizBtn" type="button"> Take a Random Quiz </button>
    </div>

    <div id="quiz" class="hidden">
      <h2>Random Quiz Questions</h2>
      <ul id="quizList"></ul>
    </div>

    <div id="res" class="hidden">
      <!-- Quiz responses will be dynamically added here -->
    </div>

    <div class="button-container">
        <button class="button" id="responseBtn" type="button">Show Me My Responses!</button>
      </div>
      
    <div id="responseContainer" class="hidden">
        <!-- User responses will be displayed here -->
    </div>
    <div class="button-container">
      <!-- Logout button -->
      <form method="post" action="logout.php">
        <input type="submit" name="logout" value="Logout" class="button">
      </form>
    </div>  
    <div class="img">
      <img src="ghost.png" alt="ghost">
    </div>
  </div>
  
  <script src="potential_script.js"></script>
</body>

</html>
