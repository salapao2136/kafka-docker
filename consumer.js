const { Client, Consumer } = require('kafka-node')
const client = new Client('localhost:2181')
const topics = [{ topic: 'topic-kafka', partition: 0 }]
const options = { autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 }
const consumer = new Consumer(client, topics, options)

consumer.on('message', function (message) {
  console.log(message)
})

consumer.on('error', function (err) {
  console.log('error', err)
})