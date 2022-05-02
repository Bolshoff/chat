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





export async function getMessageStory(){
  const storyURL = 'https://mighty-cove-31255.herokuapp.com/api/messages';
  const token = Cookies.get('token');
 // const storyLength = 2;
  let response = await fetch(storyURL,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
  let messageStory = await response.json();
  for(let i =0; i < messageStory.messages.length; i++) {
    if (messageStory.messages[i].user.email === 'abolshoff@yandex.ru'){
      let message = CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
      message.querySelector('.output-message__text').innerHTML = `Я: ${messageStory.messages[i].text}`;
      message.querySelector('.message__time').innerHTML = `${format(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`
      CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
    }else{
      let message = CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
      message.querySelector('.input-message__text').innerHTML = `${messageStory.messages[i].user.name}: ${messageStory.messages[i].text}`;
      message.querySelector('.message__time').innerHTML = `${format(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`
      CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
    }


  }
  CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
}

