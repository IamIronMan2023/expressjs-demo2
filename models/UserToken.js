import mongoose from "mongoose";

const userTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  token: {
    type: String,
    required: true,
  },
});

export default mongoose.model("UserToken", userTokenSchema);
