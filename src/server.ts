import express from 'express'

const PORT = 9000

const app = express()

app.get('/', (request, response ) => {
    return response.json({message: 'Nodejs TypeScript Setup'})
})

app.listen(PORT, () => {
    console.log('[server] Server is running. It\'s alive!')
})