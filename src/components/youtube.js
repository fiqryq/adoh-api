const { Router } = require("express");
const { Client } = require("youtubei");

const router = Router();
const yt = new Client();

router.get("/videos", async (req, res) => {
	const query = req.query.q || "";
	res.send((await yt.search(query, { type: "video" })) || []);
});

module.exports = {
	path: "/youtube",
	router,
};
