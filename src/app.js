import express from 'express'
import routes from './routes/index.js'

const app = express()

//configs
app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2)

app.use(routes)

app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
})