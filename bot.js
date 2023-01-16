const tmi = require('tmi.js');
require('dotenv').config();

// Define configuration options
const opts = {
  identity: {
    // username: 'sicktophernarf',
    // password: 'o7ebmovko2t2m2tg502qtre20vyefe'
    
    username: 'sicknarf',
    password: 'zehholgvr91k1rzx33q86o69o5xb8w'
  },
  channels: [
    'sicknarf', 'digitalchristine'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
  const firstWordArray = msg.split(' ');
  const firstWord = firstWordArray[0]
  let restOfTheSentence = ""
  const twoWords = firstWordArray[0] + firstWordArray[1]
  let cooldown = false
  let jawshCooldown = false

  for(let i=1; i<firstWordArray.length; i++){
    restOfTheSentence = restOfTheSentence + " " + firstWordArray[i]
  }


  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* ${context.username}: ${commandName}` );
  }

  if(context.username === 'sicknarf' && commandName === '!link') {
    client.say(target, 'pokemoncries.com/')
  }

  if(context.username === 'sicknarf' && commandName === '!twitchlink') {
    client.say(target, 'https://clips.twitch.tv/ApatheticHardSheepJebaited-LGjAhtiKM5YiIksb')
  }

  // if (firstWord.toLowerCase() === 'i\m' && cooldown === false){
  //   cooldown = true
  //   console.log('======================cooldown initiated======================')
  //   client.say(target, `Hi ${restOfTheSentence}, I'm narf KEKW`)
  //   cooldownReset(10)
  // }

  // if (firstWord.toLowerCase() === 'im' && cooldown === false){
  //   cooldown = true
  //   console.log('======================cooldown initiated======================')
  //   client.say(target, `Hi ${restOfTheSentence}, I'm narf KEKW.`)
  //   cooldownReset(10)
  // }

  if (commandName === 'thisisatest'){
    client.say(target, target)
    console.log(context)
  }

  // if(context.username === 'jawshdorky' && jawshCooldown===false){
  //   cooldown=true
  //   console.log('======================cooldown initiated======================')
  //   client.say(target, 'modCheck hawsh')
  //   cooldownReset(10)
  // }

  if (twoWords.toLowerCase()==='frannypls' || firstWord.toLowerCase()==='frannypls' || twoWords.toLowerCase()==='frannyplz' || firstWord.toLowerCase()==='frannyplz'){
    client.say(target, 'I did nothing')
    cooldownReset(10)
  }

  if(restOfTheSentence ==='hascaughtsicknarf' && context.username==='nightbot'){
    client.say(target, `@${firstWord} YOU CAUGHT MEEEEEEEE`)
  }

  // if(commandName==='!hbomax'){
  //   client.say(target, 'I really love HBO max UwU')
  // }

  if(twoWords.toLowerCase() === "you'recute" || 
      twoWords.toLowerCase === "yourecute" ||
      twoWords.toLowerCase === "urcute"){
        client.say(target, 'digixNoU ')
  }

  // if(firstWord.toLowerCase() === "jawsh"){
  //   client.say(target, `I love Jawsh, Jawsh is the best`)
  // }



  // if (firstWord === '!flip'){
  //   setTimeout(() => {
  //     client.say(target, `${restOfTheSentence}ノ( ゜-゜ノ)`)  
  //   }, 300);
  // }

  // if (commandName === '!hbomaxfacts'){
  //   const num = randomNo();
  //     if(num===1){
  //       client.say(target, 
  //         `/me Many smart TVs, such as those made by Samsung, LG, and Sony, are also compatible with HBO Max. Many more are supported via Casting and AirPlay 2 technology.`
  //         )
  //     }
  //     if(num===2){
  //       client.say(target, `/me HBO Max offers a massive amount of great content for both kids and adults. These include HBO's impressive catalog of original shows and movies and content from its parent company Warner Media.`)
  //     }
  //     if(num===3){
  //       client.say(target, `/me It should come as no surprise that HBO Max has a host of great TV shows after decades of great HBO originals like The Sopranos, Westworld, Game of Thrones, Sex and the City, and others. All of these can be streamed in their entirety on the service in HD quality.`)
  //     }
  //     if(num===4){
  //       client.say(target, `/me HBO Max has no shortage of movies on offer, either, with tons of great options for all ages. This includes HBO originals like Gia and Behind the Candelabra, but it has hundreds more new and classic movies thanks to Warner Media and other third-party licenses.`)
  //     }
  //     if(num===5){
  //       client.say(target, `/me HBO Max offers something for everyone — from preschoolers to teens to grownups — with scripted and unscripted series, competition shows, documentaries, animation for kids and adults, movies, and more. It's also the first step in an overhaul of HBO's model. `)
  //     }
  //     if(num===6){
  //       client.say(target, `/me HBO Max included 10,000 hours of premium content at launch. The library includes the entire HBO service, titles past and present from Warner Bros., top content from around the world, and a monthly offering of new Max Originals!`)
  //     }
  //     if(num===7){
  //       client.say(target, `/me If you're among the legions of fans who enjoy Doctor Who via streaming services, HBO Max is going to be a must-have. At launch, HBO Max became the exclusive online home for the puckish Time Lord, with all 11 seasons of the modern Doctor Who series available.`)
  //     }
  // }


}

function cooldownReset(time){
  setTimeout(() => {
    cooldown=false;
    console.log('==========================cooldown reset==========================')
  }, time*1000);
}


// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

function randomNo () {
  const sides = 7;
  return Math.floor(Math.random() * sides) + 1;
}


// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}