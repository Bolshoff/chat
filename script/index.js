import {CHAT_SCREEN_ELEMENTS, showOutputMessage} from './chat_window_elements.js';
import {SETTINGS_ELEMENTS} from './settings_elements.js';
import {AUTH_ELEMENTS, getAuthCodeForMail} from './authorization_elements.js';
import {SUBMIT_ELEMENTS} from './submit.js';

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
  showOutputMessage();
});

AUTH_ELEMENTS.CLOSE.addEventListener('click', ()=>{
  SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
  AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
})

SUBMIT_ELEMENTS.CLOSE.addEventListener('click', ()=>{
  SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
  SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
})

SUBMIT_ELEMENTS.CODE_FORM.addEventListener('submit',(e)=>{

})

AUTH_ELEMENTS.MAIL_FORM.addEventListener('submit', (e)=>{
  e.preventDefault();
  getAuthCodeForMail();
})


