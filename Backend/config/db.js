import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abhinitk016:abhi9430@cluster0.5mddi.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}