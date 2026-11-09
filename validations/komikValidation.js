const Joi = require('joi');

const komikSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'Judul komik tidak boleh kosong',
        'any.required': 'Judul komik wajib diisi'
    }),
    description: Joi.string().allow('', null),
    author: Joi.string().required().messages({
        'string.empty': 'Penulis komik tidak boleh kosong',
        'any.required': 'Penulis komik wajib diisi'
    })
});

const validateKomik = (req, res, next) => {
    const { error } = komikSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = {
    komikSchema,
    validateKomik
};
