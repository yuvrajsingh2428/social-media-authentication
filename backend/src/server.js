require("dotenv").config()
const app = require('./app.js')
const { ConnectDB } = require('./config/db.config.js')

require("colors")

const port = process.env.PORT || 4000
console.log('Port:', port);
console.log('Database URI:', process.env.MONGO_URI)

ConnectDB()


app.listen(port, () => {
    console.log(`The app is listen at http://localhost:${port}`);
    
})
