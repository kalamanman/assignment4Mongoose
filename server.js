const express = require('express')
var mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser =require('body-parser')
const errorHndler= require('error-handler')
const url='mongodb://localhost:27017/test'
mongoose.Promise = global.Promise
mongoose.connect('url',{useMongoClient:true})
let schema = mongoose.Schema({
 name:String,
  Balance:Number,
})
let Account = mongoose.model('Account',Shema)

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(errorHndler)
app.get('/accounts',routes.((req,res)=>{
  res.status(200).send(Account.find({}).prety())
})
app.post('/accounts',((req,res)=>{
  let A=new Account({JSON.parse(req.body)})
      A.save(),(err,doc)=>{
        if(err) res.status(500).send('Internal Server Error')
        res.status(201).send(doc)
      })
})
app.put("/accounts/:accountId",((req,res)=>{
  Acount.findByIdAndUpdate(req.params.id,{JSON.parse(req.body)},(err,doc)=>{
    if(err) res.status(500).send('was not updated')
    res.status(203)(doc.pretty())
  })
}

app.delete('/accounts/:acountId',(req,res)=>{
  Account.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(err) res.status(500).send('error')
    res.status(204).send(`${"id":req.params.id}`)
  })
}


app.listen(3000)
