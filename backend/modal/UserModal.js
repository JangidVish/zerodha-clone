const { userSchema } = require("../schemas/UserSchema");
const { model } = require("mongoose");
const bcrypt = require("bcryptjs");

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = new model("User", userSchema);

module.exports = User;
