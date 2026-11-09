const express = require('express');
const router = express.Router();
const komikController = require('../controller/komikController');
const { validateKomik } = require('../validations/komikValidation');

router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.post('/komik', validateKomik, komikController.createKomik);
router.put('/komik/:id', validateKomik, komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;
