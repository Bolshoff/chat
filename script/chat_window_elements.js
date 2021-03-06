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
  MESSAGE_CONTAINER : document.querySelector('.container'),
}

let messageStory;
export async function getMessageStory(){
  const storyURL = 'https://mighty-cove-31255.herokuapp.com/api/messages';
  const token = Cookies.get('token');
  let response = await fetch(storyURL,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })

  messageStory = await response.json();
  showMessageStory(messageStory);
  return  messageStory

}
function showMessageStory(messageStory){
  let messageCount = messageStory.messages.length-20;
  if(messageStory.messages.length < 20){messageCount = 0}
  for(let i = messageStory.messages.length-1; i > messageCount; i--) {

    if (messageStory.messages[i].user.email === 'abolshoff@yandex.ru'){
      let message = CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
      message.querySelector('.output-message__text').textContent = `Я: ${messageStory.messages[i].text}`;
      message.querySelector('.message__time').textContent = `${format(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`
      CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
    }else{
      let message = CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
      message.querySelector('.input-message__text').textContent = `${messageStory.messages[i].user.name}: ${messageStory.messages[i].text}`;
      message.querySelector('.message__time').textContent = `${format(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`
      CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
    }
  }
    CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
  messageStory.messages = messageStory.messages.slice(0,messageStory.messages.length-20);

}

CHAT_SCREEN_ELEMENTS.MESSAGE_CONTAINER.addEventListener('scroll',scrollListener);

function getLoadedMessagesHeight(){
  const messageBlock = document.querySelectorAll('.message');
  let messagesHeight = 0;
  for (let i = messageBlock.length - 1; i> messageBlock.length -20 ; i--) {
    messagesHeight += messageBlock[i].clientHeight;
  }
  document.querySelector('.container').scrollTop =  messagesHeight;
}

function showMessageAllHistoryLoad(){
  const allHistoryLoadMessage = document.createElement('div');
  allHistoryLoadMessage.classList.add('all-history-load-message');
  allHistoryLoadMessage.innerText = 'Вся история загружена';
  CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(allHistoryLoadMessage);

}

function scrollListener(){
  if(messageStory.messages.length === 0 && document.querySelector('.container').scrollTop === 0){
    showMessageAllHistoryLoad();
    document.querySelector('.container').removeEventListener('scroll',scrollListener);
  }
  if (document.querySelector('.container').scrollTop === 0){
    showMessageStory(messageStory);
    getLoadedMessagesHeight();
  }
}