var express = require('express');
const icumoov = require('../controllers/icumoov');
var router = express.Router();

/* GET home page. */
router.get('/', icumoov.listData());

/* GET /graph: dessine un graphe des valeurs
 * On la place avant la route des commandes sinon
 * c'est cette route qui est prise
 */
router.get('/graph', icumoov.graphData());

router.get('/:cmd', icumoov.getData());

module.exports = router;
