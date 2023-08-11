const express = require('express')
const router = express.Router()
const fs = require('fs')
const crypto = require('crypto')

function readvideodefile() {
    const videos = fs.readFileSync('./data/video-details.json')
    console.log(videos, 'This is the json file info');
    const videosParsed = JSON.parse(videos)
    // console.log(videosParsed, 'this is the info parsed');
    return videosParsed
}



router.get("/", (req, res) => {
    const videos = readvideodefile()
    res.json(videos)
    // console.log(res, 'This is the res in videos.js');
    res.end()
})


router.get("/:videoID", (req, res) => {
    console.log(req, 'this is the req')
    const videos = readvideodefile();
    const results = videos.find((video) => video.id === req.params.videoID);
    console.log(results, 'this is the results')
    res.json(results)
})



router.post("/", (req,res) =>{
    console.log(req.body,'this is the req.body')
    const newVideo = {
        id: crypto.randomUUID(),
        name: req.body.title,
        description: req.body.description,
        updating: false,
        

        
    };
    console.log(newVideo,'this is new video');
})

module.exports = router;