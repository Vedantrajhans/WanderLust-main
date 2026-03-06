require("dotenv").config({ path: require("path").join(__dirname, "../.env") });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL =
  process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to DB");
}

main()
  .then(async () => {
    await initDB();
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68ea7209cc4eeca2d6e21dea",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized — 20 listings added!");
};
