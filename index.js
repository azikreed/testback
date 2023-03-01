const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())

app.get("/", (req, res) => {
    res.json({
        name: "Ali Abdullayev",
        image: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        username: "azikreed",
        email: "azikreed@gmail.com"
    })
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server has been working on http://localhost:${PORT}`);
})