const express = require('express');
const cors = require('cors');
const capsulesRouter = require("./routes/capsules.routes");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());
app.use("/capsules", capsulesRouter);


app.get("/", (req, res) => {
    try {
        res.status(200).send('Welcome to SpaceX');
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
})


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})