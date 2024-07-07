const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB connection string with the database name
    const connection = await mongoose.connect('mongodb+srv://harshildumasia:ifPUzCNo5E4bPvzg@cluster0.ymnysye.mongodb.net/', {
      
    });

    console.log('Connected to MongoDB');
  
   // for fetching data 
    const fetchdata = await mongoose.connection.db.collection("fooddata");
    const foodCategory = await mongoose.connection.db.collection("foodcategory");
    const data = await fetchdata.find({}).toArray();
    const catData = await foodCategory.find({}).toArray();
    global.food_items = data;
    global.foodCategory = catData;
   //console.log(global.foodCategory);

  } 
  catch (error) {
    console.error('Connection to MongoDB failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
