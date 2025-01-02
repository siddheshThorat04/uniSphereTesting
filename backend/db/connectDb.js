const  mongoose =require ("mongoose");

const connectDb = async () => {
    try {
        mongoose.connect("mongodb+srv://siddheshthorat2004:08xUCdQ5X1kG6A0E@cluster0.uj4qs.mongodb.net/uniSphere?retryWrites=true&w=majority&appName=Cluster0",)
            .then(() => console.log('Connected to MongoDB successfully'))
            .catch(err => console.error('Failed to connect to MongoDB:', err));
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports=connectDb