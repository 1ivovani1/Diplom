const checkList = () => {
  const checkMess = () => {
    const sucessMess = document.querySelector('.success-message-in-form');
    if (sucessMess) {
      sucessMess.parentNode.removeChild(sucessMess);
    }
  }

  const checkWrapper = document.querySelector('.gauging'),
        checkBtn = document.querySelector('.gauging-button');
        checkWrapper.addEventListener('click',(e) => {
          let target = e.target;
          if (target === checkBtn) {
            const popup = document.querySelector('.popup-check');
            popup.style.display = 'block';

            popup.addEventListener('click',(e) => {
              let target = e.target;
              if(target.matches('.popup-close')){
                  popup.style.display = 'none';
                  checkMess();
              }else if (target.matches(".popup-check:not(#check-content)")) {
                  popup.style.display = 'none';
                  checkMess();
              }
            });
          }
        })
}
export default checkList;
