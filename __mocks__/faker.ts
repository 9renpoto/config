const faker = require.requireActual('faker')
const mockDate = require('mockdate')
faker.locale = 'ja'
mockDate.set('01/01/2020')
faker.seed(123)
module.exports = faker
