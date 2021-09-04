import express from "express";
import config from "config";
import log from "./logger";
import connect from "./db/connect";
import routes from "./routes";
import { deserializeUser } from "./middleware";
import { postRouter, sessionRouter, userRouter } from "./route";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRouter);
app.use("/api/sessions", sessionRouter);
app.use("/api/posts", postRouter);

app.listen(port, host, () => {
    log.info(`Server running on http://${host}:${port}`);

    connect();

    routes(app);
});
