const {addChild, addToy, addGift, changeDelivered, getChildId, getToyId, getChildrenWithGifts, getGiftsForChild, removeGift} = require('./db-calls.js')
const {performCommand, onAddCommand, onRemoveCommand, onLsCommandNoChild, onLsCommandWithChild, onDeliveredCommand} = require('./performCommand.js')

