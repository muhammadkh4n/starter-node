
const error = require('http-errors-promise');
const router = require('express').Router();

const auth = require('../../authorization');
const UserModel = require('./model');
const CON = require('./constants');

router.post('/', (req, res, next) => {
  UserModel.signup({ ...req.body })
    .then(result => res.json(result))
    .catch(err => error.respond(res, err, CON.ERRORS.CREATE_ERRED))
});

router.post('/login', (req, res, next) => {
  UserModel.login(req.body)
    .then(result => res.json(result))
    .catch(err => error.respond(res, err, CON.ERRORS.LOGIN_ERRED))
});


module.exports = mainRouter => mainRouter.use(`${CON.PATH}`, router);
