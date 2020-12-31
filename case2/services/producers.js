const characterGenerateController = require('../controllers/characterGenerateController.js');
const numberGenerateController = require('../controllers/numberGenerateController.js');

// produce producers
characterGenerateController.characterGenerator();
numberGenerateController.numberGenerator();
