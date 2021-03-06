/**
 * 2 methods for modelling relationships in mongoDB
 * using references (Normalization)
 * Using Embedded documents (Denormalization)
 * 
 * transaction
 * a group of operations that should be performed as a unit
 * either they all perform and change the database
 * or all of the changes roll back
 * 
 * two phase commit
 * "mongodb 2 phase commit"
 * 
 * npm i fawn
 * Fawn.init(mongoose)
 * 
 * replace .save() with
 * try{
 * new Fawn.Task()
 *      .save('rentals', rental)
 *      .update('movies', { _id: movie._id}),
 *      ...
 *      .run();
 * }
 * catch(ex){
 *  res.status(500).send('Something failed.');
 * }
 * 
 *  ID's
 * id: 5a724953ab83547957541e6a
 * Has 12 bytes
 * 4 bytes: timestamp
 * 3 bytes: machine identifier
 * 2 byte: process identifier
 * 3 bytes: counter
 * 
 * 1 byte = 8 bits
 * 2^8 = 256 combinations
 * 2^24 = 16m
 * 
 * id is generated by driver -> mongoDB
 * don't have to wait for unique id
 * 
 * const mongoose = require('mongoose');
 * const id = new mongoose.Types.ObjectId();
 * generates an ID
 * 
 * id.getTimestamp() gets first 4 bytes
 * 
 * UnhandledPromiseRejectionWarning means an error in the promise
 * 
 * npm i joi-objectid
 * validates MongoDB ids with joi
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */