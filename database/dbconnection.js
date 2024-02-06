import mongoose from "mongoose";
import dotenv from "dotenv";

const dbConnection = async () => {
    try {
        await mongoose.connect( "mongodb://127.0.0.1:27017", {
            dbName: "MERN_STACK_JOB_SEEKING",
            
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
    }
    dbConnection().then(() => {
        app.listen(PORT, () => {
            console.log("listening for requests");
        })
    })
};
export default dbConnection;
 
