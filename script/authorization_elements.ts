export const AUTH_ELEMENTS = {
  CLOSE : document.querySelector('.authorization__close-button') as HTMLButtonElement,
  MAIL : document.querySelector('.authorization__mail-input') as HTMLInputElement,
  MAIL_FORM : document.querySelector('.authorization__mail-form') as HTMLFormElement,
  MAIL_SUBMIT : document.querySelector('.authorization__submit-button') as HTMLFormElement,
  AUTH_WINDOW : document.querySelector('.authorization') as HTMLElement,
}



export async function getAuthCodeForMail(){
  const url: string = 'https://mighty-cove-31255.herokuapp.com/api/user';
  const mail: object = {
    email : `${AUTH_ELEMENTS.MAIL.value}`,
  }
  try{
    const response: object =  await fetch( url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(mail)
    });
  }catch (e){
    alert(e);
  }


}