//things that we need 

const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();

const db = monk('localhost/videobasket');
const vids = db.get('vids')

app.use(cors());
app.use(express.json());


app.listen(5000, ()=>{
    console.log('Listening on port 5000');

});

app.get('/vids', (req, res)=>{
    vids
        .find()
        .then(vids =>{
            res.json(vids);
        });
});



app.post('/vids', (req, res) => {
    if(true){
        //insert into db
        const vid = { //preventing injecton, makes things more secure, good to have on both sides
            userName : req.body.userName.toString(),
            videoLInk: req.body.videoLink.toString(),  
        }

        vids
            .insert(vid)
            .then(createdVid => {
                res.json(createdVid);
            });

    } else{
        res.status(422);
        res.json({
            message : 'Hey! Name and Link are required'
        })
    }
});
