const consultationFooter = () => {
  const checkMess = () => {
    const sucessMess = document.querySelector('.success-message-in-form');
    if (sucessMess) {
      sucessMess.parentNode.removeChild(sucessMess);
    }
  }

  const formWrapper = document.querySelector('.director'),
        submButton = document.querySelector('.consultation-btn');
        formWrapper.addEventListener('click',(e) => {
            e.preventDefault();
            let target = e.target;
            if (target === submButton) {

              const popupConsult = document.querySelector('.popup-consultation');
              popupConsult.style.display = 'block';

              popupConsult.addEventListener('click',(e) => {
                let target = e.target;
                if(target.matches('#consult-close')){
                  checkMess();
                  popupConsult.style.display = 'none';
                }else if (target.matches(".popup-consultation:not(#popup-consult)")) {
                    checkMess();
                    popupConsult.style.display = 'none';
                }
              });
            }
        });

}
import postData from './sendingDataFunc'
export default consultationFooter;
