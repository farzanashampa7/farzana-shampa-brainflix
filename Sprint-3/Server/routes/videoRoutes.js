const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function readVideos() {
    const videoData = fs.readFileSync('./data/videoDetails.json');
    const parsedData = JSON.parse(videoData);
    return parsedData;
}

router.use((_req, _res, next) => {
    console.log('Middleware from video router');
    next();
})

router.get('/', (_req, res) => {

    const videos = readVideos();
    const newVideos = videos.map(video => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image
        }
    });
    res.json(newVideos);

});

router.get('/:videoId', (req, res) => {
    const videos = readVideos();
    const singleVideo = videos.find(video => video.id === req.params.videoId);
    res.json(singleVideo);
})

router.post('/', (req, res) => {
    console.log(req);
    const newVideo = {
        id: uuidv4(),
        image: 'http://localhost:8080/static-files/images/video-list-new.jpg',
        title: req.body.title,
        channel: req.body.channel,
        description: req.body.description
    }

    const videos = readVideos();
    videos.push(newVideo);
    fs.writeFileSync('./data/videoDetails.json', JSON.stringify(videos))
    res.json(newVideo);
})



module.exports = router;