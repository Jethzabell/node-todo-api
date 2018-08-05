//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('connected to mondo db server');
    
    const db = client.db('TodoApp');
/* 
 db.collection('Users').find({
        _id: new ObjectID('5b668685c45a02b25f34c969')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console,log('Unable to fetch todos', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console,log('Unable to fetch todos', err);
    });
*/
    db.collection('Users').find({name: 'jess'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

  //  client.close();
});

