import express from "express";
import isAdmin from "../middleware/isAdmin.js";
const router = express.Router();
import roleController from '../controllers/RoleController.js'
import AnimalController from "../controllers/AnimalController.js";
import validate from '../middleware/validator'


router.post("/", new AnimalController().createAnimal)
router.get("/", isAdmin, new AnimalController().findAllAnimals)
router.put("/:id", isAdmin, new AnimalController().findOneAnimal)
router.delete("/:id", isAdmin, new AnimalController().deleteAnimal)
router.get("/:id", isAdmin, new AnimalController().findOneAnimal)

router.get("/shouse/:name", isAdmin, new AnimalController().findAnimalBySlaughterhouseName)
router.get("/count/:name", isAdmin, new AnimalController().countAnimalsBySlaughterHouseName)

export default router