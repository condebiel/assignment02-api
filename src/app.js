import express from 'express'

const app = express()

//configs
app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2)

app.get('/', (request, response) => {
	response.json({ 
		title: 'Hello World',
	})
})

app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
})