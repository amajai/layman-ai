import mongoose, { Schema, Document, Model, models } from "mongoose";
import { ObjectId } from "mongoose";

interface IPrompts {
    _id?: ObjectId,
    user_input: string,
    output: string,
    date?: Date
};

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
  prompts: IPrompts[];
}

const promptSchema = new Schema<IPrompts>({
  user_input: { type: String, required: true },
  output: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
});

const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      required: false,
    },
    prompts : {
      type: [promptSchema],
      default: [],
      required: true
    }
  }, {
  timestamps: true
});

const User: Model<IUser> = models.User || mongoose.model<IUser>("User", userSchema);
export default User;
