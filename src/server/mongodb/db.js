/*eslint-disable*/
const MongoClient = require('mongodb').MongoClient;

const Config=require('./config.js');

const client = new MongoClient(Config.dbUrl);

const ObjectID = MongoDB.ObjectID;

class Db{
  constructor(){
    this.dbClient='';
    this.connect();
  }

  connect(){
    return new Promise((resolve,reject)=>{
      if(!this.dbClient){   //解决多次连接问题
        client.connect((err)=>{
          if(err){
            reject(err)
          }else{
            const db=client.db(Config.dbName);
            this.dbClient=db; 
            resolve(this.dbClient)
          }
        }) 
      }else{
        resolve(this.dbClient)
      }    
    })
  }

  find(collectionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        const result=db.collection(collectionName).find(json);
        result.toArray((err,docs)=>{
          if(err){
            reject(err);
          }
          resolve(docs);
        })
      })
    })
  }
  insert(collectionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        db.collection(collectionName).insertOne(json,(err,res)=>{
          if(err){
            reject(err);
          }else{
            resolve(res);
          }
        })
      })
    })
  }
  update(collectionName,json1,json2){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        db.collection(collectionName).update(json1,{$set:json2},(err,res)=>{
          if(err){
            reject(err);
          }else{
            resolve(res);
          }
        })
      })
    })
  }
  remove(collectionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        db.collection(collectionName).removeOne(json,(err,res)=>{
          if(err){
            reject(err);
          }else{
            resolve(res);
          }
        })
      })
    })
  }
  getObjectId(id){
    return new ObjectID(id);
  }
}

const mydb=new Db();
module.exports = mydb;