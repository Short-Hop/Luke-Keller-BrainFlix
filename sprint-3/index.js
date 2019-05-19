const express = require('express');
const app = express();
const fs = require('fs')

const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));

function findVideo(id) {
    for (let i = 0; i < videos.length; i++) {
        if(id === videos[i].id) {
            return i;
        }
    }
}

let videos = []

app.use(express.json());

app.get('/videos', (req, res) => {
    videos = JSON.parse(fs.readFileSync('./videoInfo.json', 'utf8'))
    res.send(videos);
})

app.get('/videos/:id', (req, res) => {
    videos = JSON.parse(fs.readFileSync('./videoInfo.json', 'utf8'))
    res.send(videos.filter(video => {
        return video.id == req.params.id
    })
    [0]
    );
})

app.get('/videos/:id/comments', (req, res) => {
    videos = JSON.parse(fs.readFileSync('./videoInfo.json', 'utf8'))
    res.send(videos.filter(video => {
        return video.id === req.params.id
    })
    [0].comments
    );
})

app.post('/videos', (req, res) => {
    videos = JSON.parse(fs.readFileSync('./videoInfo.json', 'utf8'))

    if(!req.body.channel || !req.body.title || !req.body.description || !req.body.image) {
        res.status(400).send('Video could not be uploaded')
    } else {
        let newVideo = {
            id: videos.length + 1,
            title: req.body.title,
            channel: req.body.channel,
            image: req.body.image,
            description: req.body.description,
            views: 0,
            likes: 0,
            duration: "4:20",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: Date.now(),
            comments: []
        }
        videos.push(newVideo);
    }
    
    fs.writeFile('videoInfo.json', JSON.stringify(videos), error => {
        if (error) {
            console.log(error);
        }
    });

    res.send('Video Posted!')
})

app.post('/videos/:id/comments', (req, res) => {
    videos = JSON.parse(fs.readFileSync('./videoInfo.json', 'utf8'))

    let videoIndex = findVideo(req.params.id)

    if(!req.body.name || !req.body.comment) {
        res.status(400).send('Comment not sent in proper format')
    } else {
        let newComment = {
        name: req.body.name,
        comment: req.body.comment,
        id: videos[videoIndex].comments.length + 1,
        timestamp: Date.now(),
        likes: 0
        }

        videos[videoIndex].comments.push(newComment);

        fs.writeFile('videoInfo.json', JSON.stringify(videos), error => {
            if (error) {
                console.log(error);
            }
        });
        res.send('Comment Posted')
    }
})

app.delete('/videos/:id/comments/:commentId', (req, res) => {
    videos = JSON.parse(fs.readFileSync('./videoInfo.json', 'utf8'))

    let videoIndex = findVideo(req.params.id)

    console.log(req.params.commentId)

    videos[videoIndex].comments = videos[videoIndex].comments.filter(comment => {
        return comment.id != req.params.commentId
    })

    fs.writeFile('videoInfo.json', JSON.stringify(videos), error => {
        if (error) {
            console.log(error);
        }
    });
    res.send('Comment Deleted!')
})

app.listen(8080, () => {
    console.log('listening on 8080. . . ')
})