"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _isAdmin = _interopRequireDefault(require("../middleware/isAdmin.js"));

var _RoleController = _interopRequireDefault(require("../controllers/RoleController.js"));

var _AnimalController = _interopRequireDefault(require("../controllers/AnimalController.js"));

var _validator = _interopRequireDefault(require("../middleware/validator"));

const router = _express.default.Router();

router.post("/", new _AnimalController.default().createAnimal);
router.get("/", _isAdmin.default, new _AnimalController.default().findAllAnimals);
router.put("/:id", _isAdmin.default, new _AnimalController.default().findOneAnimal);
router.delete("/:id", _isAdmin.default, new _AnimalController.default().deleteAnimal);
router.get("/:id", _isAdmin.default, new _AnimalController.default().findOneAnimal);
router.get("/shouse/:name", _isAdmin.default, new _AnimalController.default().findAnimalBySlaughterhouseName);
router.get("/count/:name", _isAdmin.default, new _AnimalController.default().countAnimalsBySlaughterHouseName);
var _default = router;
exports.default = _default;