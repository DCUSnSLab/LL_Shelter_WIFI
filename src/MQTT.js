//MQTT 클라이언트를 생성 & 브로커와 연결
//import mqtt from 'mqtt';
import React, { useState } from 'react';
//import mqtt from 'paho-mqtt';


  const brokerUrl = 'mqtt://118.67.128.157:1883';
  // const topic = 'wifi/S001';

  const options = {
  username: 'dgo2o',
  password: 'dgo2o!@',
};

  const client = mqtt.connect(brokerUrl);
  const sendMessageToMqttBroker = (message) => {
    const topic = 'wifi/S001';
    let time = new Date();
    message = time;
    const payload = JSON.stringify(message);
    client.publish(topic, payload);
  };
function Q() {
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessageToMqttBroker({message});
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
}


// const brokerUrl = 'mqtt://118.67.128.157:1883';
// const topic = 'wifi/S001';
//
// const client = mqtt.connect(brokerUrl);
//
// const options = {
//   username: 'dgo2o',
//   password: 'dgo2o!@',
// };
//
// client.on('connect', () => {
//   console.log('Connected to MQTT broker');
//   client.subscribe(topic);
// });
//
// client.on('message', (topic, message) => {
//   const payload = JSON.parse(message.toString());
//   console.log(`Received MQTT message on topic ${topic}: ${payload}`);
// });
//



//메세지를 보낼 컴포넌트에서 MQTT 클라이언트를 import
/*
import client from './mqtt';
 */

//메세지를 보낼 함수에서 MQTT 메시지를 publish
/*
const sendMessageToMqttBroker = (message) => {
  const topic = 'myTopic';
  const payload = JSON.stringify(message);
  client.publish(topic, payload);
};
*/

//App.js 파일에서 'sendMessageToMqttBroker()' 함수를 호출
/*
import React, { useState } from 'react';
import sendMessageToMqttBroker from './sendMessageToMqttBroker';

function App() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessageToMqttBroker({ message });
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" value={message} onChange={handleInputChange} />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
*/