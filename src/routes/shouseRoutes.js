import express from 'express'
import shouseController from '../controllers/shouseController'
import canUpdateProfile from '../middleware/canUpdateProfile';
import isAdmin from '../middleware/isAdmin';
import Validate from '../middleware/validator'

const router = express.Router();
router.post('/', new shouseController().registerSlaughterHouse);
router.get('/',new shouseController().findAllSlaughterHouse);
router.get('/:id',new shouseController().findOneSlaughterHouse);
router.delete('/:id',new shouseController().deleteSlaughterhouse);

export {router as default};