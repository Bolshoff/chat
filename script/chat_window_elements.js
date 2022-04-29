import Cookies from 'js-cookie';
import format from 'date-fns/format'
export const CHAT_SCREEN_ELEMENTS = {
  SETTING_BUTTON : document.querySelector('.managing-chat__button-settings'),
  QUIT_BUTTON : document.querySelector('.managing-chat__button-quit'),
  MESSAGE_INPUT : document.querySelector('.input-chat__input'),
  SUBMIT_BUTTON : document.querySelector('.input-chat__submit-button'),
  INPUT_FORM : document.querySelector('.input-chat__form'),
  CHAT_SCREEN : document.querySelector('.chat-screen'),
  MESSAGE_SCREEN : document.querySelector('.message-screen'),
  OUTPUT_TEMPLATE : document.querySelector('#output-template'),
  OUTPUT_MESSAGE_TEXT : document.querySelector('.output-message__text'),
  INPUT_TEMPLATE : document.querySelector('#input-template'),
  INPUT_MESSAGE_TEXT : document.querySelector('.input-message__text'),
  MESSAGE_TIME : document.querySelector('.message__time'),
}



export  function showOutputMessage(){
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

export async function getMessageStory(){
  const storyURL = 'https://mighty-cove-31255.herokuapp.com/api/messages';
  const token = Cookies.get('token');
  const storyLength = 2;
  let response = await fetch(storyURL,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
  let messageStory = await response.json();
  for(let i =0; i < storyLength; i++) {
    const message = CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
    message.querySelector('.input-message__text').innerHTML = `${messageStory.messages[i].user.name}: ${messageStory.messages[i].text}`;
    message.querySelector('.message__time').innerHTML = `${format(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`
    CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
  }


}