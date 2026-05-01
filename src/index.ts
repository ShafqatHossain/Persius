import dotenv from 'dotenv'
dotenv.config()
import { Client, IntentsBitField } from 'discord.js'

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
    ],
})

client.on('ready', (c) => {
    console.log(`${c.user.tag} is operational.`)
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return

    if (interaction.commandName === 'test') {
        interaction.reply('Test command executed.')
    }
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return

    if (message.content === 'Whos that pokemon?') {
        message.reply('its pikachuuuuuuuu')
    }
})

client.login(process.env.TOKEN)
