const { model } = require("mongoose");

const { PostionSchema } = require("../schemas/PositionSchema");

const PositionModel = new model("position", PostionSchema);

module.exports = { PositionModel };
