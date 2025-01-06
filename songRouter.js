import {addSong,listSong,removeSong} from '../controllers/songController'
import express from 'express'
const songRouter = express.Router();
songRouter.post('/add',addSong);
songRouter.get('/list',listSong);
songRouter('/add',upload/fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]))
songRouter.post('/remove',removeSong)
export default songRouter;
