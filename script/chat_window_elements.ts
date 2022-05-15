import Cookies from 'js-cookie';
import format from 'date-fns/format'


 interface CHAT_Elements{
   SETTING_BUTTON : HTMLButtonElement,
   QUIT_BUTTON : HTMLButtonElement,
   MESSAGE_INPUT : HTMLInputElement,
   SUBMIT_BUTTON :  HTMLButtonElement,
   INPUT_FORM :  HTMLFormElement,
   CHAT_SCREEN : HTMLElement,
   MESSAGE_SCREEN : HTMLElement,
   OUTPUT_TEMPLATE :  HTMLTemplateElement,
   OUTPUT_MESSAGE_TEXT :  HTMLElement,
   INPUT_TEMPLATE :  HTMLTemplateElement,
   INPUT_MESSAGE_TEXT : HTMLElement,
   MESSAGE_TIME :  HTMLElement,
   MESSAGE_CONTAINER :  HTMLElement,
 }
export const CHAT_SCREEN_ELEMENTS: CHAT_Elements = {
  SETTING_BUTTON : document.querySelector('.managing-chat__button-settings') as HTMLButtonElement,
  QUIT_BUTTON : document.querySelector('.managing-chat__button-quit') as HTMLButtonElement,
  MESSAGE_INPUT : document.querySelector('.input-chat__input') as HTMLInputElement,
  SUBMIT_BUTTON : document.querySelector('.input-chat__submit-button') as HTMLButtonElement,
  INPUT_FORM : document.querySelector('.input-chat__form') as HTMLFormElement,
  CHAT_SCREEN : document.querySelector('.chat-screen') as HTMLElement,
  MESSAGE_SCREEN : document.querySelector('.message-screen') as HTMLElement,
  OUTPUT_TEMPLATE : document.querySelector('#output-template') as HTMLTemplateElement,
  OUTPUT_MESSAGE_TEXT : document.querySelector('.output-message__text') as HTMLElement,
  INPUT_TEMPLATE : document.querySelector('#input-template') as HTMLTemplateElement,
  INPUT_MESSAGE_TEXT : document.querySelector('.input-message__text') as HTMLElement,
  MESSAGE_TIME : document.querySelector('.message__time') as HTMLElement,
  MESSAGE_CONTAINER : document.querySelector('.container') as HTMLElement,
}

let messageStory: object;
export async function getMessageStory(){
  const storyURL: string = 'https://mighty-cove-31255.herokuapp.com/api/messages';
  const token: string | undefined = Cookies.get('token');
  const response = await fetch(storyURL,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })

  messageStory = await response.json();
  showMessageStory(messageStory);
  return  messageStory

}
function showMessageStory(messageStory: any){
  let messageCount = messageStory.messages.length-20;
  if(messageStory.messages.length < 20){messageCount = 0}
  for(let i = messageStory.messages.length-1; i > messageCount; i--) {

    if (messageStory.messages[i].user.email === 'abolshoff@yandex.ru'){
      const message = CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
      const outputMessage = document.querySelector('.output-message__text') as HTMLElement;
      const messageTime = document.querySelector('.message__time') as HTMLElement;
     outputMessage.textContent = `Я: ${messageStory.messages[i].text}`;
     messageTime.textContent = `${format(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`
      CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
    }else{
      const message: any = CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
      const inputMessage = document.querySelector('.input-message__text') as HTMLElement;
      const messageTime = document.querySelector('.message__time') as HTMLElement;

      inputMessage.textContent = `${messageStory.messages[i].user.name}: ${messageStory.messages[i].text}`;
      messageTime.textContent = `${format(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`
      CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
    }
  }
    CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
  messageStory.messages = messageStory.messages.slice(0,messageStory.messages.length-20);

}

CHAT_SCREEN_ELEMENTS.MESSAGE_CONTAINER.addEventListener('scroll',scrollListener);

function getLoadedMessagesHeight(){
  const messageBlock = document.querySelectorAll('.message');
  const container = document.querySelector('.container') as HTMLElement;
  let messagesHeight = 0;
  for (let i = messageBlock.length - 1; i> messageBlock.length -20 ; i--) {
    messagesHeight += messageBlock[i].clientHeight;
  }
    container.scrollTop =  messagesHeight;
}

function showMessageAllHistoryLoad(){
  const allHistoryLoadMessage = document.createElement('div');
  allHistoryLoadMessage.classList.add('all-history-load-message');
  allHistoryLoadMessage.innerText = 'Вся история загружена';
  CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(allHistoryLoadMessage);

}

function scrollListener(){
  const container = document.querySelector('.container') as HTMLElement;
  if(messageStory.messages.length === 0 && container.scrollTop === 0){
    showMessageAllHistoryLoad();
    container.removeEventListener('scroll',scrollListener);
  }
  if (container.scrollTop === 0){
    showMessageStory(messageStory);
    getLoadedMessagesHeight();
  }
}