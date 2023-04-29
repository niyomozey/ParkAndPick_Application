import express from "express";
import isAdmin from "../middleware/isAdmin.js";
const router = express.Router();
import roleController from '../controllers/RoleController.js'
import validate from '../middleware/validator'


router.post("/", isAdmin, new roleController().createRole)
router.get("/", isAdmin, new roleController().findAllRoles)
router.put("/:id",validate.updateRole, isAdmin, new roleController().updateRole)
router.delete("/:id", isAdmin, new roleController().deleteRole)
router.get("/:id", isAdmin, new roleController().findOneRole)

export default router