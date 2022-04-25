import {CHAT_SCREEN_ELEMENTS} from './chat_window_elements.js';
import {SETTINGS_ELEMENTS} from './settings_elements.js';

CHAT_SCREEN_ELEMENTS.SETTING_BUTTON.addEventListener('click',()=>{
  CHAT_SCREEN_ELEMENTS.CHAT_SCREEN.classList.add('hide');
  SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
})

SETTINGS_ELEMENTS.SETTING_CLOSE.addEventListener('click',()=>{
  SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
  CHAT_SCREEN_ELEMENTS.CHAT_SCREEN.classList.remove('hide');
})