const express = require("express");
const app = express();
require("dotenv").config();
const dns = require("dns");

const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");

const bodyParser = require("body-parser");
const cors = require("cors");
const { OrdersModel } = require("./models/OrdersModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authRoute = require("./Routes/AuthRoute");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const fallbackUri = process.env.MONGO_URL_FALLBACK;

const parseDnsServers = () => {
    const raw = process.env.DNS_SERVERS;
    if (!raw) {
        return [];
    }

    return raw
        .split(",")
        .map((server) => server.trim())
        .filter(Boolean);
};

const connectToMongo = async () => {
    try {
        await mongoose.connect(uri);
        return;
    } catch (error) {
        const isSrvDnsError = error?.syscall === "querySrv";
        if (!isSrvDnsError) {
            throw error;
        }

        const dnsServers = parseDnsServers();
        if (dnsServers.length > 0) {
            console.warn(`MongoDB SRV DNS lookup failed. Retrying with DNS servers: ${dnsServers.join(", ")}`);
            dns.setServers(dnsServers);

            try {
                await mongoose.connect(uri);
                return;
            } catch (retryError) {
                if (!fallbackUri) {
                    throw retryError;
                }

                console.warn("Retry with SRV URI failed. Trying MONGO_URL_FALLBACK...");
                await mongoose.connect(fallbackUri);
                return;
            }
        }

        if (fallbackUri) {
            console.warn("MongoDB SRV DNS lookup failed. Trying MONGO_URL_FALLBACK...");
            await mongoose.connect(fallbackUri);
            return;
        }

        throw error;
    }
};

const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.DASHBOARD_URL,
    "http://localhost:3000",
    "http://localhost:3001",
].filter(Boolean);

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/allHoldings" ,async (req,res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions" ,async (req,res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
}) 

app.get("/allOrders" ,async (req,res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
}) 

app.post('/newOrder',async (req,res) => {
    let order = new OrdersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,

    });
    order.save();
    res.send("Order saved!!")
});

app.use("/", authRoute); 

const startServer = async () => {
    try {
        await connectToMongo();
        console.log("Database Connected");

        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server", error);
        process.exit(1);
    }
};

startServer();
