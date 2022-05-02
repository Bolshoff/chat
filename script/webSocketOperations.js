import {CHAT_SCREEN_ELEMENTS, } from './chat_window_elements';
import format from 'date-fns/format';

const url = 'mighty-cove-31255.herokuapp.com';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFib2xzaG9mZkB5YW5kZXgucnUiLCJpYXQiOjE2NTEwNjU0NjYsImV4cCI6MTY1MTUxMTg2Nn0.rvzDxTVM1RCqaBlTHuPx3RzJOA-teu-OQNtaTA64kMo';
const socket = new WebSocket(`ws://${url}/websockets?${token}`);
export function connectOnServer(){
  const socket = new WebSocket(`ws://${url}/websockets?${token}`);
  socket.onopen = function(e) {
    console.log(" Соединение установлено, рвботаем дальше");
  };
  socket.onmessage = function(event) {
    console.log(JSON.parse(event.data));
    const messageText = JSON.parse(event.data);
    // const message = CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
     if (messageText.user.email === "abolshoff@yandex.ru") {
       let message = CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
       message.querySelector('.output-message__text').innerHTML = `Я: ${messageText.text}`;
       message.querySelector('.message__time').innerHTML = `${format(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`
       CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
    }else{

    let message = CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
    message.querySelector('.input-message__text').innerHTML = `${messageText.user.name}: ${messageText.text}`;
    message.querySelector('.message__time').innerHTML = `${format(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`
    CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
    }
    CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
  };
  socket.onclose = function(event){
    console.log('не было не единого разрыва');

   setTimeout(()=>{
         connectOnServer();
   }, 5000) ;
  }
}

export  function sendMessage(){
   const outputMessage = CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value;

  socket.send(JSON.stringify({
    text: `${outputMessage}`,
  }));
}


  function showOutputMessage(){
  const message = CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  if (hours < 10 ){
    hours = `0${new Date().getHours()}`;
  }
  if(minutes < 10){
    minutes = `0${new Date().getMinutes()}`;
  }
  message.querySelector('.output-message__text').innerHTML = `Я: ${CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value}`;
  message.querySelector('.message__time').innerHTML = `${hours}:${minutes}`;

  if(CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value) {
    CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
  }
  CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value = '';
}