const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test", {
        useNewUrlParser : true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
};

const userS = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    age: Number,
    email: String,
    address: String,
    gender: String,
    type: String,
    createdAt: String,
    updatedAt: String,
});

const BranchDetail = new mongoose.Schema({
    name: String,
    address: String,
    IFSC: String,
    MICR: Number,
    createdAt: String,
    updatedAt: String,
});

const MasterAccount = new mongoose.Schema({
    balance: Number,
    createdAt: String,
    updatedAt: String,
});

const SavingsAccount = new mongoose.Schema({
    account_number: Number,
    balance: Number,
    interestRate: Number,
    createdAt: String,
    updatedAt: String,
});

const FixedAccount = new mongoose.Schema({
    account_number: Number,
    balance: Number,
    interestRate: Number,
    startDate: String,
    maturityDate: String,
    createdAt: String,
    updatedAt: String,
});

const User = mongoose.model("user", userS);

app.get("/user", async (req,res) => {
    const user = await User.find({email: "sbickertonj@archive.org"}).lean().exec();
    console.log(user);
    res.status(200).json({data: user});
});

// const Branchdetail = mongoose.model("branchdetail", BranchDetail);

// app.get("/branchdetail", async (req,res) => {
//     const branchdetail = await User.find({email: "imartinson0@feedburner.com"}).exec();
//     console.log(branchdetail);
//     res.status(200).json({data: branchdetail});
// });

// const Masteraccount = mongoose.model("masteraccount", MasterAccount);

// app.get("/users", async (req,res) => {
//     const user = await User.find({email: "dnorthagei@liveinternet.ru"}).exec();
//     console.log(user);
//     res.status(200).json({data: user});
// });
// const User = mongoose.model("user", userS);

// app.get("/users", async (req,res) => {
//     const user = await User.find({email: "dnorthagei@liveinternet.ru"}).exec();
//     console.log(user);
//     res.status(200).json({data: user});
// });
// const User = mongoose.model("user", userS);

// app.get("/users", async (req,res) => {
//     const user = await User.find({email: "dnorthagei@liveinternet.ru"}).exec();
//     console.log(user);
//     res.status(200).json({data: user});
// });

const start = async () => {
    await connect();
    app.listen(1234, () => {
        console.log("listening on 1234")
    });
};

start();