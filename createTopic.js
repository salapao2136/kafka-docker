const { KafkaClient, Producer } = require('kafka-node')
const client = new KafkaClient('localhost:2181')
const producer = new Producer(client)

producer.createTopics(['topic1','topic2'], false, function (err, data) {
  console.log(data)
})
