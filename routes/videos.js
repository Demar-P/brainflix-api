const express = require('express')
const router = express.Router()
const fs = require('fs')
const crypto = require('crypto')

function readvideodefile() {
    const videos = fs.readFileSync('./data/video-details.json')
    const videosParsed = JSON.parse(videos)
    return videosParsed
}



router.get("/", (req, res) => {
    const videos = readvideodefile()
    res.json(videos)

    res.end()
})


router.get("/:videoID", (req, res) => {

    const videos = readvideodefile();
    const results = videos.find((video) => video.id === req.params.videoID);

    res.json(results)
})



router.post("/", (req, res) => {
    console.log(req.body, 'i am here')
    const newVideo = {
        id: crypto.randomUUID(),
        name: req.body.title,
        description: req.body.description,
        updating: false,
        likes: "",
        channel: "n/a",
        video: "",
        timestamp: " ",
        views: "",
        duration: "",
        timestamp: "",
        comments: []



    };

    const videos = readvideodefile();
    videos.push(newVideo);
    fs.writeFileSync("./data/video-details.json", JSON.stringify(videos));

    res.status(201).json(newVideo)
});

router.delete(":videoID", (req, res) => {
    const videos = readvideofile();
    const remainingVideos = videos.filter((video) => {
        return video.id !== req.params.videoID;
    });
    fs.writeFileSync("./data/video-details.json", JSON.stringify(remainingVideos));
    res.status(200).send('Successfully deleted athlete');
});

module.exports = router;