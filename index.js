const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1909609167:AAHnQ6vlHYCx3Ebzx8wthvJaOPnXgY7Tvro';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const audioPath = 'assets/audio';

bot.onText(/\/bitconeeect/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/bitconneeect.mp3`);
});

bot.onText(/\/excited/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/excited.mp3`);
});

bot.onText(/\/heyheyheey/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/heheheey.mp3`);
});

bot.onText(/\/heyeverybody/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/heyEveryBody.mp3`);
});

bot.onText(/\/independently/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/independently.mp3`);
});

bot.onText(/\/loooooooove/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/loooooooove.mp3`);
});

bot.onText(/\/mmhmmhnonono/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/mmhmmhnonono.mp3`);
});

bot.onText(/\/mywife/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/mywife.mp3`);
});

bot.onText(/\/somuchmoney/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/soMuchMoney.mp3`);
});

bot.onText(/\/thatsascam/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/thatsaScam.mp3`);
});

bot.onText(/\/tothebank/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/toTheBank.mp3`);
});

bot.onText(/\/waves/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/waves.mp3`);
});

bot.onText(/\/whaaat/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/whaaat.mp3`);
});

bot.onText(/\/whatamigonnado/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/whatAmIGonnaDo.mp3`);
});

bot.onText(/\/whoathatsreal/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/whoaThatsReal.mp3`);
});

bot.onText(/\/wowwowwhatsup/, (msg) => {
  bot.sendAudio(msg.chat.id, `${audioPath}/wowwowWhatsUp.mp3`);
});