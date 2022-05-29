import express from "express";
import { createServer } from "http"

function boot(port: number) {
    const app = express();
    const server = createServer(app);

    app.get("/", (req, res) => {
        return res.send("Server is up");
    })

    app.all("*", (req, res) => {
        return res.send("Not Found");
    })

    server.listen(port, () => {
        console.log("Server is running at port", port);
    })

}

boot(4000)