const mongoose = require('mongoose');

// function connectToDb(){
//     mongoose.connect(process.env.DB_CONNECT).then(() =>{
//             console.log("Connected to DB");
//         }).catch(err => console.log(err));
// }

const DB_NAME = "yatrix";


const connectToDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Connected to DB Successfully!");
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB connection having problem", error);
        process.exit(1)
    }
}

module.exports = connectToDb;