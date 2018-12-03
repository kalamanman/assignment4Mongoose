const express = require('express')
var mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser =require('body-parser')
const errorHndler= require('error-handler')
const url='mongodb://localhost:27017/test'
const routes= require('./routes')
mongoose.Promise = global.Promise
mongoose.connct('url')
let scheema = mongoose.Scheema({
  Account:Number,
  Balance:Number,
  name:String
})
const app = express()
app.use('logger')
app.use(bodyParser.json())
app.use(errorHndler)

app.get('/',routes.getroutes)
app.post('/accounts/:account',routes.addAccount)
app.put("/accounts/:account",routes.updateAccount)
app.delete('/acounts/:acount',routes.removeAcount)
app.get('/accounts/:account/balance',routes.getBalance)
app.post('/accounts/:account/:balance',routes.depositBalance)
app.put('/accounts/:account/:balance',routes.withdrawBalance)
