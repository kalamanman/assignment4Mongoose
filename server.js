const express = require('express')
var mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser =require('body-parser')
const errorHndler= require('error-handler')
const url='mongodb://localhost:27017/test'
const routes= require('./routes')
mongoose.Promise = global.Promise
mongoose.connect('url')
let scheema = mongoose.Scheema({
 name:String,
  Balance:Number,

})
const app = express()
app.use('logger')
app.use(bodyParser.json())
app.use(errorHndler)

app.get('/accounts',routes.getAccounts)
app.post('/accounts',routes.addAccount)
app.put("/accounts/:accountId",routes.updateAccount)
app.delete('/acounts/:acountId',routes.removeAcount)
