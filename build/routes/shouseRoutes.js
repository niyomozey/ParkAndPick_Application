"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _shouseController = _interopRequireDefault(require("../controllers/shouseController"));

var _canUpdateProfile = _interopRequireDefault(require("../middleware/canUpdateProfile"));

var _isAdmin = _interopRequireDefault(require("../middleware/isAdmin"));

var _validator = _interopRequireDefault(require("../middleware/validator"));

const router = _express.default.Router();

exports.default = router;
router.post('/', new _shouseController.default().registerSlaughterHouse);
router.get('/', new _shouseController.default().findAllSlaughterHouse);
router.get('/:id', new _shouseController.default().findOneSlaughterHouse);
router.delete('/:id', new _shouseController.default().deleteSlaughterhouse);