import {CHAT_SCREEN_ELEMENTS, } from './chat_window_elements';
import format from 'date-fns/format';
import Cookies from 'js-cookie';


const url = 'mighty-cove-31255.herokuapp.com/websockets?';
const token = Cookies.get('token') ;
const socket = new WebSocket(`ws://${url}${token}`);

export function connectOnServer(){
   const socket = new WebSocket(`ws://${url}${token}`);
  socket.onopen = function() {
    console.log(" Соединение установлено, работаем дальше");
  };
  socket.onmessage = function(event) {
    try {
      const messageText = JSON.parse(event.data);
      if (messageText.user.email === "abolshoff@yandex.ru") {
        const message = CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(
            true);
        message.querySelector(
            '.output-message__text').textContent = `Я: ${messageText.text}`;
        message.querySelector('.message__time').innerHTML = `${format(
            new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`
        CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
      } else {
        const message = CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(
            true);
        message.querySelector(
            '.input-message__text').textContent = `${messageText.user.name}: ${messageText.text}`;
        message.querySelector('.message__time').textContent = `${format(
            new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`
        CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
      }
    }catch (e) {
      console.log(e);
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
  // socket.onclose = function(event){
  //   console.log(event.code);
  //   console.log(event.reason);
  //   console.log('не было ни единого разрыва');
  //   const rws = new ReconnectingWebSocket(`ws://${url}${token}`);
  // }

}

socket.onclose = function(event){
  console.log(event.code);
  console.log(event.reason);
  console.log('не было ни единого разрыва');
  if(event.code ===1006) {
    // const socket = new ReconnectingWebSocket(`ws://${url}${token}`);
    connectOnServer();
  }
}


export  function sendMessage(){
  const outputMessage = CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value;
  socket.send(JSON.stringify({
    text: `${outputMessage}`,
  }));
}

export default socket;
