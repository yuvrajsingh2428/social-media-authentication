const { default: mongoose } = require("mongoose")

exports.ConnectDB = async()=>{
    try {
            await mongoose.connect(process.env.MONGO_URI);
            console.log(`the db is connected with host ${mongoose.connection.host}`.bgGreen.white);
            
    } catch (error) {
        console.error(`Database connection error: ${error.message}`.bgRed.white);
        mongoose.disconnect()
        process.exit(1)  
        
    }
}