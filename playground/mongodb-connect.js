const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB', err);
    }
    console.log('Connected to MongoDB');

    var db = client.db('TodoApp');
    // db.collection('Todos').insertOne({text:'Buy Eggs', completed: false},(err, result)=>{
    //     if (err){
    //         console.log('Document Insertion Failed', err);
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    //Insert in Users Collection
    // db.collection('Users').insertOne({name:'Mukesh', age: 35, location:95670},(err, result)=>{
    //     if (err){
    //         console.log('Document Insertion Failed', err);
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    //find from Todos Collection
    // db.collection('Todos').find({completed:false}).count().then((count)=>{
    //     console.log(JSON.stringify(count, undefined, 2));
    // },(err)=>{
    //     console.log('Error occured while finding Todos', err);
    // });

    //Delete ToDo
    // db.collection('Todos').deleteOne({task : "Buy Eggs"}).then((updatedObj)=>{
    //     console.log(JSON.stringify(updatedObj, undefined, 2));
    // },(err)=>{
    //     console.log('Error occured while deleting Todos', err);
    // });

    //Update ToDo
    db.collection('Todos').findOneAndUpdate({_id : new ObjectId('5aa20e09fe794c2a88c2c7d4')},
{
    $set:{
        completed:false
    },
    $rename: {task: 'text'}
}).then((updatedObj)=>{
        console.log(JSON.stringify(updatedObj, undefined, 2));
    },(err)=>{
        console.log('Error occured while deleting Todos', err);
    });

    //client.close();
})