import mongoose from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      typeof: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      typeof: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      typeof: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true } // it will give 2 field created and updated at to chech when user is created,verified
  // first filed kya kya data fields aap logo second feeled uske time stamps
);

export const user = mongoose.model('User', userSchema);
// interview ques User is stored as users in database(monogodb) all small letter and in plural form