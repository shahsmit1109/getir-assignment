var logger = require("../logger/logger.js");
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_CONNECTION_STRING);


var countController = {};

countController.search = async function(req, res) {
        logger.info(req.body);
        if(req.body.startDate && req.body.endDate){
            await client.connect();
            const db = client.db('getir-case-study');
            const collection = db.collection('records');
            const findResult = await collection.find({
                $expr: {
                  $and: [
                    {
                      $gte: [
                        {
                          $sum: "$counts"
                        },
                        req.body.minCount
                      ]
                    },
                    {
                      $lte: [
                        {
                          $sum: "$counts"
                        },
                        req.body.maxCount
                      ]
                    }
                  ]
                },
                createdAt:{
                    $gte: new Date(req.body.startDate),
                    $lte: new Date(req.body.endDate)
                }
              }).toArray(); 
              res.send({code:0,msg:'Success',records:findResult});
        }
        else{
            res.send({code:400,msg:'Please send start date and end date to fetch records'});
        }
         
        
};

module.exports = countController;
