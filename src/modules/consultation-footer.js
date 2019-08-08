const consultationFooter = () => {
  const formWrapper = document.querySelector('.director'),
        submButton = document.querySelector('.consultation-btn');
        formWrapper.addEventListener('click',(e) => {
            e.preventDefault();
            let target = e.target;
            if (target === submButton) {
              const errorMessage = 'Упс... Что-то пошло не так!',
                    loadMessage = 'Загрузка...',
                    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

                    const statusMessage = document.createElement('div');
                          statusMessage.classList.add('success-message')
                          statusMessage.style.cssText = "font-size:2rem;color:black;"

              const popupConsult = document.querySelector('.popup-consultation');
              popupConsult.style.display = 'block';

              popupConsult.addEventListener('click',(e) => {
                let target = e.target;
                if(target.matches('#consult-close')){
                    popupConsult.style.display = 'none';
                }else if (target.matches(".popup-consultation:not(#popup-consult)")) {
                      popupConsult.style.display = 'none';
                }
              });

              document.querySelector('#consult-form').addEventListener('submit',(e) => {
                setTimeout(() => {
                  popupConsult.style.display = 'none';
                  document.querySelector('#popup-consult').removeChild(statusMessage);
              },4000)

                const inputs = popupConsult.querySelectorAll('input'),
                      question = document.querySelector('input[name="user_quest"]');

                e.preventDefault();
                document.querySelector('#popup-consult').appendChild(statusMessage);
                statusMessage.textContent = loadMessage;


                const data = new FormData(document.querySelector('#consult-form'));
                    let body = {};
                    data.forEach((val,key) => {
                      body[key] = val;
                    })
                body['question'] = question.value;

                  postData(body)
                  .then(response => {
                    if (response.status !== 200) {
                      throw new Error('Упс... Что-то пошло не так!')
                    }
                    statusMessage.textContent = successMessage;
                    inputs.forEach(item => item.value = '');
                    question.value = '';
                  })
                  .catch(error => {
                    console.error(error);
                    inputs.forEach(item => item.value = '');
                    question.value = '';
                    statusMessage.textContent = errorMessage;
                  })
              })


            }
        });

}
import postData from './sendingDataFunc'
export default consultationFooter;
