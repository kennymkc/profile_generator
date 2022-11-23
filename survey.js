const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = [];

rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
  profile.push(`My name is ${answer}!`);
  rl.question('What is an activity you enjoy doing?', (answer) => {
    profile.push(`${answer} is my favourite activity.`);
    rl.question('What do you listen while doing that?', (answer) => {
      profile.push(`I like to listen to ${answer}.`);
      rl.question('Which meal of the day is your favourite?', (answer) => {
        profile.push(`My favourite meal of the day is ${answer}.`);
        rl.question('What is your favourite thing to eat for that meal?', (answer) => {
          profile.push(`I could eat ${answer} every day!`);
          rl.question('What sport is your absolute favourite?', (answer) => {
            profile.push(`I am a die hard ${answer} fan.`);
            rl.question('What is your superpower? Name two things you are amazing at (don\'t be shy!)', (answer) => {
              profile.push(`My superpower is: ${answer}.`);

              console.log(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});


//rl.question('What do you listen to while doing that?', (answer) => {
//  console.log(`${answer}? They're my favourite!`);
//
//  rl.close();
//});