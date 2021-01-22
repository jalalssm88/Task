const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const data = [
    {
        id:1,
        name:'Image Name 1',
        brand:'This is first brand',
        description:'des 1',
        image_url:'https://i.imgur.com/PeVoSZ9.jpg'
    },
    {
        id:2,
        name:'Imge Name 2',
        brand:'brand 2',
        description:'This is second brand',
        image_url:'https://i.imgur.com/znlsbqz.jpg'
    },
    {
        id:3,
        name:'Image Name 3',
        brand:'brand 3',
        description:'This is third brand',
        image_url:'https://i.imgur.com/mKWPvnf.png'
    },
    {
        id:4,
        name:'Image Name 4',
        brand:'brand 4',
        description:'This is fourth brand',
        image_url:'https://i.imgur.com/RQwmWpI.jpg'
    },
    {
        id:5,
        name:'Image Name 5',
        brand:'brand 5',
        description:'This is fitth brand',
        image_url:'https://i.imgur.com/IFWqPoj.jpg'
    }
]
app.get('/get_posts', (req, res)=>{
    res.status(200).json(data)
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));