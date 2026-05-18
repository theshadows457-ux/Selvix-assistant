const mineflayer = require('mineflayer')

function createBot() {

  const bot = mineflayer.createBot({
    host: 'THE-SHADOWS.aternos.me',
    port: 12969,
    username: 'SelvixAI',
    version: '1.21.1'
  })

  bot.on('spawn', () => {
    console.log('Selvix online!')
  })

  bot.on('chat', (username, message) => {

    if (username === bot.username) return

    if (message.toLowerCase() === '/selvix hello') {
      bot.chat('[SELVIX]: Systems online.')
    }

  })

  bot.on('end', () => {
    console.log('Disconnected... reconnecting')

    setTimeout(() => {
      createBot()
    }, 5000)
  })

}

createBot()
