import {
  CHAT_SCREEN_ELEMENTS,
  getMessageStory,
  showOutputMessage,
} from './chat_window_elements.js';
import {SETTINGS_ELEMENTS, setUserName} from './settings_elements.js';
import {AUTH_ELEMENTS, getAuthCodeForMail} from './authorization_elements.js';
import {SUBMIT_ELEMENTS, } from './submit.js';
import Cookies from 'js-cookie';
import {connectOnServer, sendMessage} from './webSocketOperations';

//const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFib2xzaG9mZkB5YW5kZXgucnUiLCJpYXQiOjE2NTEwNjU0NjYsImV4cCI6MTY1MTUxMTg2Nn0.rvzDxTVM1RCqaBlTHuPx3RzJOA-teu-OQNtaTA64kMo';

connectOnServer();

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
  //showOutputMessage();
  CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value = '';

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
  e.preventDefault();
  setCookiesToken();

})

AUTH_ELEMENTS.MAIL_FORM.addEventListener('submit', (e)=>{
  e.preventDefault();
  getAuthCodeForMail();
})

function setCookiesToken(){
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFib2xzaG9mZkB5YW5kZXgucnUiLCJpYXQiOjE2NTEwNjU0NjYsImV4cCI6MTY1MTUxMTg2Nn0.rvzDxTVM1RCqaBlTHuPx3RzJOA-teu-OQNtaTA64kMo'//SUBMIT_ELEMENTS.CODE.value;
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
  setUserName();
})

// document.querySelector('.test-button').addEventListener('click',(e)=>{
//   e.preventDefault();
//   testUserName();
// })
async function testUserName(){
  const token = Cookies.get('token');
  try {
    let user = await fetch('https://mighty-cove-31255.herokuapp.com/api/user/me',{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}` ,

      },

    });
    let userName = await user.json();
    console.log(userName);

  }catch (e) {
    alert(e);
  }


}
getMessageStory();
