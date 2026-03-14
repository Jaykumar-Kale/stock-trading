const { model } = require("mongoose");
const { PositionSchema } = require("../schemas/PositionsSchema");

const PositionsModel = new model("position",PositionSchema);

module.exports = { PositionsModel};