import express from "express";
const app = express();
app.get("/hello", (req, res, next) => {
    return res.send("Hello");
});
app.listen(5000, () => console.log("server open"));
//# sourceMappingURL=index.js.map