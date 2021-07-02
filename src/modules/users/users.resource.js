const router = require('express').Router();
const { RequestValidation } = require('../../support');
const { UserDto } = require('./dto');

router.get('/save', (req, res) => {
    console.log('HOLA')
    const requestData = RequestValidation.fullValidate(UserDto, req);
    if (requestData.error) return res.status(422).json(requestData);
    //console.log(requestData)
    /*PopUpController
        .getPopUps()
        .then(({ status = 200, data = {} }) => { return res.status(status).json(data); })
        .catch(({ status = 500, data = {} }) => { return res.status(status).json(data); });*/
});

module.exports = router;