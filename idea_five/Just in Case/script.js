const quoteBtn = document.getElementById('quoteBtn');
const quizBtn = document.getElementById('quizBtn');
const responseBtn = document.getElementById("responseBtn");

const quotes = [
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
function getQuote() {
  
  // add the hidden class to questions and responses if a user wants to look at the quotes instead
  var list = document.getElementById("quiz").classList;
  list.add("hidden");
  var response_list = document.getElementById("res").classList;
  response_list.add("hidden");

  
  let randomNum = Math.floor(Math.random() * quotes.length - 1);
  if (randomNum < 0 || randomNum > quotes.length - 1) {
    randomNum = quotes.length - 1;
  }
  document.getElementById('displayQuote').innerHTML = quotes[randomNum][0];
  document.getElementById('game').innerHTML = "~" + quotes[randomNum][1] + "~";
}



function showQuiz() {
  var list = document.getElementById("quiz").classList;
  list.remove("hidden");
  var response_list = document.getElementById("res").classList;
  response_list.add("hidden");
}

function showResponses() {
  var list = document.getElementById("quiz").classList;
  list.add("hidden");
  var responses = document.getElementsByClassName("res_radio");  
  // get all radio buttons and check for the selected ones
  // We have to type cast to an array because responses is a HTML collection object
  Array.from(responses).forEach( response => { 
    if(response.checked ){ 
      // if a radio button is selected, set the value of that response on the page
      document.getElementById(`res_${response.name}`).innerHTML = response.value
    }
  })
  var response_list = document.getElementById("res").classList;
  response_list.remove("hidden"); // remove the hidden class from the responses div and show it. 
}

quoteBtn.addEventListener("click", getQuote);
quizBtn.addEventListener("click", showQuiz);
responseBtn.addEventListener("click", showResponses);