const { addMatchImageSpashotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
addMatchImageSpashotPlugin(on, config)
}
