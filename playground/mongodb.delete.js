//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('connected to mondo db server');
    
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'something to do'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({name: 'jess'}).then((result)=> {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({age: 34}).then((result) => {
        console.log(result);
    });
  //  client.close();
});

