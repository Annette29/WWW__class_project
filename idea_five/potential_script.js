const quoteBtn = document.getElementById('quoteBtn');
const quizBtn = document.getElementById('quizBtn');
const responseContainer = document.getElementById('res');
const quizDiv = document.getElementById("quiz");
const quizList = document.getElementById("quizList");

const quotes = [
  // Array of quotes and their sources
  ["We all make choices in life, but in the end our choices make us.", "Andrew Ryan, Bioshock"],
  ["Get over here!", "Scorpion, Mortal Kombat"],
  ["What is better? To be born good or to overcome your evil nature through great effort?", "Elder Scrolls V: Skyrim"],
  ["The right man in the wrong place can make all the difference in the world.", "Half Life"],
  ["Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.", "Javik, Mass Effect"],
  ["Bring me a bucket, and I'll show you a bucket!", "Borderlands 2"],
  ["Wanting something does not give you the right to have it.", "Ezio, Assassin’s Creed 2"],
  ["Even in dark times, we cannot relinquish the things that make us human.", "Metro 2033"],
  ["How many are there in you? Whose hopes and dreams do you encompass? Could you but see the eyes in your own, the minds in your mind, you would see how much we share.", "Half-Life 2"],
  ["The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take... inventory.", "Call of Duty: Modern Warfare 2"],
  ["It’s a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same.", "Dishonored"],
  ["A hero need not speak. When he is gone, the world will speak for him.", "Halo"],
  ["No gods or kings. Only man.", "Bioshock"],
  ["Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain’t nothing fair.", "Red Dead Redemption"],
  ["You can’t break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands.", "Far Cry 2"],
  ["It's time to kick ass and chew bubblegum... and I'm all outta gum.", "Duke Nukem 3D"],
  ["Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind...are not the ones we intended.", "Gears of War 2"],
  ["If our lives are already written, it would take a courageous man to change the script.", "Alan Wake"],
  ["It's easy to forget what a sin is in the middle of a battlefield.", "Metal Gear Solid"],
  ["Without Passion, you are already dead", "Max Payne"],
  ["Who are you, that do not know your history?", "Ulysses, Fallout New Vegas"],
  ["Don't wish it were easier, wish you were better.", "Chief, Animal Crossing"],
  ["Do not be sorry, be better", "Kratos, God Of War 2018"],
  ["The world fears the inevitable plummet into the abyss. Watch for that moment and when it comes, do not hesitate to leap. It is only when you fall that you learn whether you can fly.", "Flemeth, Dragon Age Origins"],
  ["Most test subjects do experience some cognitive deterioration after a few months in suspension. Now you've been under for... quite a lot longer, and it's not out of the question that you might have a very minor case of serious brain damage. But don't be alarmed, alright? Although, if you do feel alarm, try to hold onto that feeling because that is the proper reaction to being told you have brain damage.", "Wheatley, Portal 2"],
  ["If history only remembers one in a thousands of us, then the future will be filled with stories of who we were and what we did.", "Battlefield 1"],
  ["Nothing is true, everything is permitted.", "Ezio Auditore, Assassin’s Creed 2"],
  ["NOTHING IS MORE BADASS THAN TREATING A WOMAN WITH RESPECT!", "Mr. Torgue, Borderlands 2"],
  ["Good men mean well. We just don't always end up doing well.", "Isaac Clarke, Dead Space 3"],
  ["It’s dangerous to go alone, take this!", "Old Man, The Legend of Zelda"],
  ["War. War never changes.", "Narrator, Fallout 3"],
  ["The best solution to a problem is usually the easiest one. And I'll be honest - killing you is hard. You know what my days used to be like? I just tested. Nobody murdered me, or put me in a potato, or fed me to birds. I had a pretty good life. And then you showed up. You dangerous, mute lunatic. So you know what? You win. Just go. [chuckles] It's been fun. Don't come back.", "GLaDOS, Portal 2"],
  ["Endure and survive.", "Ellie, The Last of Us"]
];

const quizQuestions = [
  // Question 1
  [
    "Which element has the atomic number 6?",
    ["Carbon", "Oxygen", "Hydrogen", "Helium"]
  ],

  // Question 2
  [
    "Who wrote the play 'Hamlet'?",
    ["William Shakespeare", "Arthur Miller", "Anton Chekhov", "Henrik Ibsen"]
  ],

  // Question 3
  [
    "What is the capital city of Italy?",
    ["Rome", "Paris", "Berlin", "Madrid"]
  ],

  // Question 4
  [
    "Which animal is known for its ability to fly?",
    ["Bird", "Fish", "Lion", "Snake"]
  ],

  // Question 5
  [
    "Who is the Greek god of love?",
    ["Eros", "Zeus", "Hades", "Poseidon"]
  ],

  // Question 6
  [
    "What is the capital city of France?",
    ["Paris", "London", "Tokyo", "New York"]
  ],

  // Question 7
  [
    "Who painted the Mona Lisa?",
    ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"]
  ],

  // Question 8
  [
    "What is the largest planet in our solar system?",
    ["Jupiter", "Saturn", "Mars", "Neptune"]
  ],

  // Question 9
  [
    "Which country won the FIFA World Cup in 2018?",
    ["France", "Croatia", "Brazil", "Germany"]
  ],

  // Question 10
  [
    "What is the chemical symbol for gold?",
    ["Au", "Ag", "Cu", "Fe"]
  ],

  // Question 11
  [
    "In which year did the Titanic sink?",
    ["1912", "1898", "1936", "1945"]
  ],

  // Question 12
  [
    "What is the tallest mountain in the world?",
    ["Mount Everest", "K2", "Kangchenjunga", "Makalu"]
  ],

  // Question 13
  [
    "What is the currency of Japan?",
    ["Yen", "Euro", "Dollar", "Pound"]
  ],

  // Question 14
  [
    "Who wrote the novel 'Pride and Prejudice'?",
    ["Jane Austen", "Charlotte Bronte", "Emily Bronte", "Virginia Woolf"]
  ],

  // Question 15
  [
    "What is the primary language spoken in Brazil?",
    ["Portuguese", "Spanish", "English", "French"]
  ],

  // Question 16
  [
    "Which element has the atomic number 1?",
    ["Hydrogen", "Helium", "Lithium", "Oxygen"]
  ],

  // Question 17
  [
    "Who is the author of the Harry Potter book series?",
    ["J.K. Rowling", "Stephen King", "George R.R. Martin", "Dan Brown"]
  ],

  // Question 18
  [
    "Which planet is known as the 'Blue Planet'?",
    ["Earth", "Mars", "Venus", "Mercury"]
  ],

  // Question 19
  [
    "What is the currency of Brazil?",
    ["Real", "Peso", "Euro", "Dollar"]
  ],

  // Question 20
  [
    "Who is the author of '1984'?",
    ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"]
  ],

  // Question 21
  [
    "What is the capital city of Canada?",
    ["Ottawa", "Toronto", "Vancouver", "Montreal"]
  ],

  // Question 22
  [
    "Which animal is known for its black and white stripes?",
    ["Zebra", "Tiger", "Giraffe", "Cheetah"]
  ],

  // Question 23
  [
    "What is the capital city of Australia?",
    ["Canberra", "Sydney", "Melbourne", "Brisbane"]
  ],

  // Question 24
  [
    "Which animal is known as 'The King of the Jungle'?",
    ["Lion", "Tiger", "Leopard", "Cheetah"]
  ],

  // Question 25
  [
    "Who is the Greek god of thunder?",
    ["Zeus", "Hades", "Poseidon", "Apollo"]
  ],

  // Question 26
  [
    "What is the largest ocean on Earth?",
    ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
  ],

  // Question 27
  [
    "Which country is known for inventing pizza?",
    ["Italy", "Greece", "Spain", "China"]
  ],

  // Question 28
  [
    "Who painted the ceiling of the Sistine Chapel?",
    ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"]
  ],

  // Question 29
  [
    "What is the chemical formula for water?",
    ["H2O", "CO2", "NaCl", "O2"]
  ],

  // Question 30
  [
    "In which city is the famous Red Square located?",
    ["Moscow", "Beijing", "London", "Paris"]
  ],

  // Question 31
  [
    "Who is the main character in 'The Great Gatsby'?",
    ["Jay Gatsby", "Nick Carraway", "Daisy Buchanan", "Tom Buchanan"]
  ],

  // Question 32
  [
    "What is the official language of China?",
    ["Mandarin Chinese", "Cantonese Chinese", "English", "Spanish"]
  ],

  // Question 33
  [
    "Which planet is known as the 'Red Planet'?",
    ["Mars", "Jupiter", "Saturn", "Uranus"]
  ],

  // Question 34
  [
    "What is the currency of Germany?",
    ["Euro", "Pound", "Dollar", "Yen"]
  ],

  // Question 35
  [
    "What is the tallest waterfall in the world?",
    ["Angel Falls", "Niagara Falls", "Iguazu Falls", "Victoria Falls"]
  ],

  // Question 36
  [
    "What is the largest country by land area?",
    ["Russia", "Canada", "China", "United States"]
  ],

  // Question 37
  [
    "What is the primary language spoken in Italy?",
    ["Italian", "Spanish", "English", "French"]
  ],

  // Question 38
  [
    "Which element has the atomic number 8?",
    ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"]
  ],

  // Question 39
  [
    "Who wrote the play 'Romeo and Juliet'?",
    ["William Shakespeare", "Arthur Miller", "Anton Chekhov", "Henrik Ibsen"]
  ],

  // Question 40
  [
    "What is the capital city of Spain?",
    ["Madrid", "Barcelona", "Seville", "Valencia"]
  ],

  // Question 41
  [
    "Which animal is known for its long neck?",
    ["Giraffe", "Elephant", "Kangaroo", "Rhino"]
  ],

  // Question 42
  [
    "Who is the Egyptian god of the sun?",
    ["Ra", "Anubis", "Osiris", "Horus"]
  ],

  // Question 43
  [
    "What is the largest lake in Africa?",
    ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Turkana"]
  ],

  // Question 44
  [
    "What is the official language of India?",
    ["Hindi", "English", "Bengali", "Tamil"]
  ],

  // Question 45
  [
    "Which planet is known as the 'Giant of our Solar System'?",
    ["Jupiter", "Saturn", "Neptune", "Uranus"]
  ],

  // Question 46
  [
    "What is the currency of France?",
    ["Euro", "Pound", "Dollar", "Yen"]
  ],

  // Question 47
  [
    "Who is the current Prime Minister of the United Kingdom?",
    ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"]
  ],

  // Question 48
  [
    "What is the smallest country in the world?",
    ["Vatican City", "Monaco", "Nauru", "Tuvalu"]
  ],

  // Question 49
  [
    "Which country is famous for the Pyramids of Giza?",
    ["Egypt", "Greece", "Italy", "China"]
  ],

  // Question 50
  [
    "Who is the current President of the United States?",
    ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"]
  ],

  // Question 51
  [
    "What is the largest continent in the world?",
    ["Asia", "Africa", "North America", "South America"]
  ],

  // Question 52
  [
    "Which country is famous for the Taj Mahal?",
    ["India", "China", "Japan", "Thailand"]
  ],

  // Question 53
  [
    "Who is the artist behind the 'Starry Night' painting?",
    ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"]
  ],

  // Question 54
  [
    "What is the chemical symbol for oxygen?",
    ["O", "C", "H", "N"]
  ],

  // Question 55
  [
    "In which year did World War II end?",
    ["1945", "1939", "1918", "1950"]
  ],

  // Question 56
  [
    "What is the largest desert in the world?",
    ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"]
  ],

  // Question 57
  [
    "What is the official language of Russia?",
    ["Russian", "German", "French", "Spanish"]
  ],

  // Question 58
  [
    "Which planet is known for its beautiful rings?",
    ["Saturn", "Jupiter", "Uranus", "Neptune"]
  ],

  // Question 59
  [
    "What is the currency of Spain?",
    ["Euro", "Pound", "Dollar", "Yen"]
  ],

  // Question 60
  [
    "Who is the author of 'To Kill a Mockingbird'?",
    ["Harper Lee", "J.D. Salinger", "F. Scott Fitzgerald", "John Steinbeck"]
  ],

  // Question 61
  [
    "What is the capital city of Germany?",
    ["Berlin", "Munich", "Frankfurt", "Hamburg"]
  ],

  // Question 62
  [
    "Which animal is known as 'The Ship of the Desert'?",
    ["Camel", "Horse", "Elephant", "Donkey"]
  ],

  // Question 63
  [
    "What is the capital city of Egypt?",
    ["Cairo", "Alexandria", "Luxor", "Giza"]
  ],

  // Question 64
  [
    "Who is the Norse god of thunder?",
    ["Thor", "Loki", "Odin", "Freyja"]
  ],

  // Question 65
  [
    "What is the largest sea in the world?",
    ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Mediterranean Sea"]
  ],

  // Question 66
  [
    "Which country is famous for the Eiffel Tower?",
    ["France", "Italy", "Spain", "China"]
  ],

  // Question 67
  [
    "Who painted the 'The Last Supper'?",
    ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"]
  ],

  // Question 68
  [
    "What is the chemical formula for table salt?",
    ["NaCl", "H2O", "CO2", "O2"]
  ],

  // Question 69
  [
    "In which city is the famous Statue of Liberty located?",
    ["New York City", "Washington D.C.", "Los Angeles", "Chicago"]
  ],

  // Question 70
  [
    "Who is the author of the 'Lord of the Rings' trilogy?",
    ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "J.K. Rowling"]
  ],

  // Question 71
  [
    "What is the official language of Brazil?",
    ["Portuguese", "Spanish", "English", "French"]
  ],

  // Question 72
  [
    "Which element has the atomic number 53?",
    ["Iodine", "Bromine", "Chlorine", "Fluorine"]
  ],

  // Question 73
  [
    "Who wrote the novel 'Moby-Dick'?",
    ["Herman Melville", "Mark Twain", "Charles Dickens", "F. Scott Fitzgerald"]
  ],

  // Question 74
  [
    "What is the capital city of China?",
    ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"]
  ],

  // Question 75
  [
    "Which animal is known for its distinctive black and white fur?",
    ["Panda", "Gorilla", "Orangutan", "Koala"]
  ],

  // Question 76
  [
    "Who is the Greek goddess of wisdom?",
    ["Athena", "Aphrodite", "Hera", "Artemis"]
  ],

  // Question 77
  [
    "What is the deepest ocean trench in the world?",
    ["Mariana Trench", "Tonga Trench", "Kermadec Trench", "Philippine Trench"]
  ],

  // Question 78
  [
    "Which country is known for the Colosseum?",
    ["Italy", "Greece", "Spain", "Egypt"]
  ],

  // Question 79
  [
    "Who painted the 'Girl with a Pearl Earring'?",
    ["Johannes Vermeer", "Rembrandt", "Vincent van Gogh", "Pablo Picasso"]
  ],

  // Question 80
  [
    "What is the chemical symbol for helium?",
    ["He", "H", "O", "C"]
  ],

  // Question 81
  [
    "In which year did the United States declare independence?",
    ["1776", "1789", "1801", "1812"]
  ],

  // Question 82
  [
    "What is the largest forest in the world?",
    ["Amazon Rainforest", "Congo Rainforest", "Taiga", "Boreal Forest"]
  ],

  // Question 83
  [
    "What is the official language of Japan?",
    ["Japanese", "Chinese", "Korean", "Thai"]
  ],

  // Question 84
  [
    "Which planet is known as the 'Ice Giant'?",
    ["Uranus", "Neptune", "Saturn", "Jupiter"]
  ],
];



function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function displayQuote() {
  const [quote, source] = getRandomItem(quotes);
  const displayQuoteElement = document.getElementById("displayQuote");
  const gameElement = document.getElementById("game");

  displayQuoteElement.textContent = quote;
  gameElement.textContent = "From: " + source;
}

function displayQuiz() {
  quizDiv.style.display = "block";
  responseContainer.innerHTML = "";
  quizList.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    const randomQuestion = getRandomItem(quizQuestions);
    const [question, options] = randomQuestion;
    const optionsHtml = options.map((option) => `
      <li>
        <input type="radio" name="question${i}" value="${option}">
        <label>${option}</label>
      </li>
    `).join("");
    const questionHtml = `<li>${question}</li>${optionsHtml}`;
    quizList.innerHTML += questionHtml;
  }
}

// Add event listener to the "Show Me My Responses" button
responseBtn.addEventListener("click", showResponses);

// Function to display user responses
function showResponses() {
  responseContainer.innerHTML = "";
  
  const responseList = document.createElement("ul");
  
  // Loop through the radio button inputs and check the selected option
  for (let i = 0; i < 7; i++) {
    const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
    if (selectedOption) {
      const question = selectedOption.name;
      const response = selectedOption.value;
      
      const listItem = document.createElement("li");
      listItem.textContent = `${question}: ${response}`;
      responseList.appendChild(listItem);
    }
  }
  
  // Append the response list to the response container
  responseContainer.appendChild(responseList);
  responseContainer.classList.remove("hidden");
}

quoteBtn.addEventListener("click", displayQuote);
quizBtn.addEventListener("click", displayQuiz);