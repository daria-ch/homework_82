const express = require("express");
const Track = require("../models/Track");

const router = express.Router();

router.get("/", async (req, res) => {
    if (!req.query.album) {
        const items = await Track.find();
        res.send(items);
    }
    const artist = await Track.find({album: req.query.album});
    res.send(artist);
});


router.post('/', async (req, res) => {
    const trackData = req.body;
    const track = new Track(trackData);
    await track.save();
    res.send(track);
});

module.exports = router;