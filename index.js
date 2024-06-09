const mineflayer = require('mineflayer')
function createBot () {
const bot = mineflayer.createBot({
  host: 'ip.aternos.host', //ACA VA LA IP DE TU SERVIDOR  // SERVER IP
  username: 'BOTJIN', // ACA VA EL NOMBRE DEL BOT  // BOT NAME
  port: 25565, // PUERTO DEL SERVIDOR // SERVER PORT
  version: '1.16.5',
})

bot.on('spawn', () => {
  bot.chat('/register contraseña')  
});

bot.on("move", function() {
  //triggers when the bot moves

  bot.setControlState("jump", true); //continuously jumps
  setTimeout(() => {
    //sets a delay
    bot.setControlState("jump", false); //stops jumping
  }, 1000); //delay time

  setTimeout(() => {
    //sets a delay
    bot.setControlState("forward", true); //continuously walks forward
    setTimeout(() => {
      //sets a delay
      bot.setControlState("forward", false); //stops walking forward
    }, 500); //delay time
  }, 1000); //delay time

  setTimeout(() => {
    //sets a delay
    bot.setControlState("back", true); //continuously walks backwards
    setTimeout(() => {
      //sets a delay
      bot.setControlState("back", false); //stops walking backwards
    }, 500); //delay time
  }, 2000); //delay time

  setTimeout(() => {
    //sets a delay
    bot.setControlState("right", true); //continuously walks right
    setTimeout(() => {
      //sets a delay
      bot.setControlState("right", false); //stops walking right
    }, 2000); //delay time
  }, 500); //delay time

  setTimeout(() => {
    //sets a delay
    bot.setControlState("left", true); //continuously walks lefz
    setTimeout(() => {
      //sets a delay
      bot.setControlState("left", false); //stops walking left
    }, 2000); //delay time
  }, 500); //delay time
});

bot.on('kicked', console.log)
bot.on('error', console.log)
bot.on('end', createBot)
}

createBot()
