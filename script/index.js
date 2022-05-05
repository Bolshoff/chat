import {
  CHAT_SCREEN_ELEMENTS,
  getMessageStory,
  showOutputMessage,
} from './chat_window_elements.js';
import {SETTINGS_ELEMENTS, setUserName} from './settings_elements.js';
import {AUTH_ELEMENTS, getAuthCodeForMail} from './authorization_elements.js';
import {SUBMIT_ELEMENTS, } from './submit.js';
import Cookies from 'js-cookie';
import socket, {connectOnServer, sendMessage} from './webSocketOperations';

CHAT_SCREEN_ELEMENTS.SETTING_BUTTON.addEventListener('click',()=>{

  SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
  SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.remove('hide');
})

SETTINGS_ELEMENTS.SETTING_CLOSE.addEventListener('click',()=>{
  SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
  SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
})

SETTINGS_ELEMENTS.SETTING_BACKGROUND.addEventListener('click',(e)=>{

  SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
  SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
  AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
  SUBMIT_ELEMENTS.CODE.classList.add('hide');
})

CHAT_SCREEN_ELEMENTS.INPUT_FORM.addEventListener('submit', (e)=>{
  e.preventDefault();
  sendMessage();

  CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value = '';

});

AUTH_ELEMENTS.CLOSE.addEventListener('click', ()=>{
  SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.remove('hide');
  AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
})

SUBMIT_ELEMENTS.CLOSE.addEventListener('click', ()=>{

  SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
  SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
})

SUBMIT_ELEMENTS.CODE_FORM.addEventListener('submit',(e)=>{

  SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
  SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
  e.preventDefault();
  setCookiesToken();


})

AUTH_ELEMENTS.MAIL_FORM.addEventListener('submit', (e)=>{
  e.preventDefault();
  getAuthCodeForMail();
  AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
  SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.remove('hide');
})


function setCookiesToken(){
  const token = SUBMIT_ELEMENTS.CODE.value;
  Cookies.set('token', `${token}`);
  showUserNameWindow();

}
function showUserNameWindow(){
  SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
  SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.remove('hide');
  SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
}

SETTINGS_ELEMENTS.SETTING_NAME_FORM.addEventListener('submit',(e)=>{
  e.preventDefault();
  SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
  SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
  setUserName();
  getMessageStory();
  connectOnServer();
 setTimeout(showUserName, 1000);
})

async function showUserName(){
  let token = Cookies.get('token');

  try {
    let user = await fetch('https://mighty-cove-31255.herokuapp.com/api/user/me',{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}` ,
      },
    });
    let userName = await user.json();
    document.querySelector('.nickname').textContent = `Ник: ${userName.name}`;
  }catch (e) {
    alert(e);
  }
}

CHAT_SCREEN_ELEMENTS.QUIT_BUTTON.addEventListener('click',()=>{
  socket.close(1000, 'Выход из чата');
})


