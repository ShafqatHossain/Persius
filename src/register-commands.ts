import { REST, Routes } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const commands = [
    {
        name: 'test',
        description: 'testing commands',
    },
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN!)

;(async () => {
    try {
        console.log('Registering commands...')

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID!,
                process.env.GUILD_ID!
            ),
            { body: commands }
        )
        console.log('Commands registered successfully')
    } catch (error) {
        console.log(`Something went wrong : ${error}`)
    }
})()
