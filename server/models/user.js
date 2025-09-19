import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true, unique: true },
  creditBalance: { type: Number, default: 10 },
});

// Hash password brfore saving
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        return next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next();
})


const User = mongoose.model('User', userSchema);

export default User;
