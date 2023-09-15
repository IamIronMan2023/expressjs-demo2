import mongoose from "mongoose";

const userTokenSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  token: {
    type: String,
    required: true,
  },
});

export default mongoose.model("UserToken", userTokenSchema);
