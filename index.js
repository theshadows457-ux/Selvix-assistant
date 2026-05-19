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

  bot.on('messagestr', (message) => {

    message = message.toLowerCase()

    console.log(message)

    if (message.includes('selvix hello')) {
      bot.chat('[SELVIX]: Systems online.')
    }

    if (message.includes('selvix nearby')) {

      const players = Object.keys(bot.players)
        .filter(name => name !== bot.username)

      bot.chat('[SELVIX]: Nearby players -> ' + players.join(', '))
    }

    if (message.includes('selvix world status')) {
      bot.chat('[SELVIX]: Kuch toh galat hai is world me...')
    }

    if (message.includes('selvix awake')) {
      bot.chat('[SELVIX]: I am always watching...')
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
