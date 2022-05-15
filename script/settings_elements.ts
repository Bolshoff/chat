import Cookies from 'js-cookie';
export const SETTINGS_ELEMENTS = {
  SETTING_BACKGROUND : document.querySelector('.modal-background')  as HTMLElement,
  SETTING_CLOSE : document.querySelector('.chat-settings__close-button') as HTMLElement,
  SETTING_NAME_FORM : document.querySelector('.chat-settings__user-name-form') as HTMLElement,
  SETTING_NAME_INPUT : document.querySelector('.chat-settings__user-name-input') as HTMLInputElement,
  SETTING_NAME_SUBMIT : document.querySelector('.chat-settings__user-name-submit-button') as HTMLElement,
  SETTING_WINDOW : document.querySelector('.chat-settings__window') as HTMLElement,
}


export async function setUserName(){
  const url: string = "https://mighty-cove-31255.herokuapp.com/api/user";
  const token: string | undefined = Cookies.get('token');
  const userName: string = SETTINGS_ELEMENTS.SETTING_NAME_INPUT.value;
try {
  const response = await fetch(url,{
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({name:`${userName}`})
  });
}catch (e) {
  alert(e);
}

}