import {CHAT_SCREEN_ELEMENTS, } from './chat_window_elements';
import format from 'date-fns/format';
import Cookies from 'js-cookie';
import ReconnectingWebSocket from 'reconnecting-websocket';

const url = 'mighty-cove-31255.herokuapp.com/websockets?';
const token = Cookies.get('token') ;
const socket = new WebSocket(`ws://${url}${token}`);

export function connectOnServer(){
   const socket = new WebSocket(`ws://${url}${token}`);
  socket.onopen = function(e) {
    console.log(" Соединение установлено, работаем дальше");
  };
  socket.onmessage = function(event) {
   try{ const messageText = JSON.parse(event.data);
      return messageText;
      }catch (e) {
     console.log(e);
      }
    if (messageText.user.email === "abolshoff@yandex.ru") {
      let message = CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
      message.querySelector('.output-message__text').textContent = `Я: ${messageText.text}`;
      message.querySelector('.message__time').innerHTML = `${format(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`
      CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
    }else{
      let message = CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
      message.querySelector('.input-message__text').textContent = `${messageText.user.name}: ${messageText.text}`;
      message.querySelector('.message__time').textContent = `${format(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`
      CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
    }
    const messageContainer =  document.querySelector('.container');
    const isScrolledToBottom = messageContainer.scrollHeight - messageContainer.clientHeight <= messageContainer.scrollTop + 1;
    if(!isScrolledToBottom) {
      messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
    // if (document.querySelector('.container').scrollTop = document.querySelector('.container').scrollHeight){
    //   CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
    // }
  };
  socket.onclose = function(event){
    console.log('не было ни единого разрыва');
    const rws = new ReconnectingWebSocket(`ws://${url}/websockets?${token}`);
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
  message.querySelector('.output-message__text').textContent = `Я: ${CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value}`;
  message.querySelector('.message__time').textContent = `${hours}:${minutes}`;

  if(CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value) {
    CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
  }
  CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value = '';
}
export default socket;