const express = require('express');
const mongodb = require('mongodb');
const { URI, DATABASE } = require('../config.js');

const BASE_PATH = '/users';
const COLLECTION = 'users';
const router = express.Router();
const clientPromise = mongodb.MongoClient.connect(URI, {useUnifiedTopology: true});

router.get(BASE_PATH, async (req, res) => {
  const client = await clientPromise;
  const database = client.db(DATABASE);
  const collection = database.collection(COLLECTION);
  const data = await collection.find({}).toArray()
  res.json(data);
})

router.post(`${BASE_PATH}`, async (req, res) => {
  const client = await clientPromise;
  const database = client.db(DATABASE);
  const collection = database.collection(COLLECTION);
  try {
    const data = await collection.save(req.body);
    res.status(202).json(data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

router.get(`${BASE_PATH}/:id`, async (req, res) => {
  const client = await clientPromise;
  const database = client.db(DATABASE);
  const collection = database.collection(COLLECTION);
  const data = await collection.find({
    _id: mongodb.ObjectId(req.params.id)
  }).toArray()
  res.json(data);
})

module.exports = {
  users: router
}
