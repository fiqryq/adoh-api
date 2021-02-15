const express = require("express");
const app = express();
const port = 3000;

// Routes Component
const youtube = require("./components/youtube");

const routes = express.Router();

routes.use(youtube.path, youtube.router);

app.use("/api", routes);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
