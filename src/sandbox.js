const {addChild, addToy, addGift, changeDelivered, getChildId, getToyId, getChildrenWithGifts, getGiftsForChild, removeGift} = require('./db-calls.js')
const {performCommand, onAddCommand, onRemoveCommand, onLsCommand, onDeliveredCommand} = require('./performCommand.js')

onAddCommand('jacks', 'lucas')
