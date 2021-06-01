// const amqp = require('amqplib/callback_api');

// //sending message
// //crate connection
// amqp.connect('amqp://localhost', function(error, connection) {
//   if (error) {
//     throw error;
//   }
//   //create channel
//   connection.createChannel(function(error1, channel) {
//     if (error1) {
//       throw error1;
//     }

//     //assert queue - creates new if does not exist
//     let queue = 'node_queue';
//     let msg = 'Test message';

//     channel.assertQueue(queue, {
//       durable: true
//     });
//     channel.sendToQueue(queue, Buffer.from(msg), {
//       persistent: true
//     });
//     console.log("Sent '%s'", msg);
//   });
//   setTimeout(function() {
//     connection.close();
//     process.exit(0)
//   }, 500);
// });

// //consuming message
// //create connection
// amqp.connect('amqp://localhost', function(error0, connection) {
//   if (error0) {
//     throw error0;
//   }

//   //create channel
//   connection.createChannel(function(error1, channel) {
//     if (error1) {
//       throw error1;
//     }

//     //assert queue
//     var queue = 'node_queue';

//     channel.assertQueue(queue, {
//       durable: true
//     });
    
//     channel.prefetch(1);
    
//     console.log("Waiting for messages in %s", queue);
//     channel.consume(queue, function(msg) {

//       console.log("Received '%s'", msg.content.toString());

//       setTimeout(function() {
//         channel.ack(msg);
//       }, 1000);
//     });
//   });
// });