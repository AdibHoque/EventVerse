import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
  clerkId: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true},
  username: {type: String, unique: true, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  photo: {type: String, required: true},
});

const User = models.User || model("User", UserSchema);

export default User;
