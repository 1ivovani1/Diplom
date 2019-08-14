const calc = () => {
  const wrapper = document.querySelector('.constructor'),
        allBodies = Array.from(wrapper.querySelectorAll('.panel-collapse')),
        allConstructBtns = Array.from(wrapper.querySelectorAll('.construct-btn'));

const checkboxes = document.querySelectorAll('.onoffswitch-checkbox');

checkboxes.forEach(item => {
    item.addEventListener('click',() => {
      if (item.hasAttribute('checked')) {
        item.removeAttribute('checked');
      }else{
        item.setAttribute('checked','');
      }
    });
});

const checkMess = () => {
  const sucessMess = document.querySelector('.success-message-in-form');
  if (sucessMess) {
    sucessMess.parentNode.removeChild(sucessMess);
  }
}

allConstructBtns.forEach(item => {
  item.addEventListener('click', (e)=> {
    e.preventDefault();
    let target = e.target;

    if (target.matches('.construct-btn,.construct-btn span')) {
      const index = allConstructBtns.indexOf(target.closest('.construct-btn'));
      if (index + 1 !== allBodies.length) {
        allBodies[index].style.display = 'none'
        allBodies[index + 1].style.display = 'block';
        calcCount.type();
      }else{
        const popup = document.querySelector('.popup-discount');
        popup.style.display = 'block';

        popup.addEventListener('click',(e) => {
          let target = e.target;
          if(target.matches('.popup-close')){
              popup.style.display = 'none';
              checkMess();
          }else if (target.matches(".popup-discount:not(.popup-content)")) {
              popup.style.display = 'none';
              checkMess();
          }
        });

        allBodies[0].style.display = 'block';
        allBodies[allBodies.length - 1].style.display = 'none';
        calcCount.start();
        calcCount.eventsListener();

      }
   }
  })

});


 const allTitles = Array.from(wrapper.querySelectorAll('.title-text')),
       allSelects = Array.from(wrapper.querySelectorAll('.select-box'));
       let one = true;

         const calcCount = {
           totalPrice:0,
           objValues:{},
           start(){
             this.type();
             this.selectSum();
             this.checkNumbers();
             this.countRing();
             this.checkingDown();
             this.showResult();
           },
           type(){
             const toiletType = wrapper.querySelector('#myonoffswitch');
             if (toiletType.hasAttribute('checked')) {
               this.objValues.type = 'Однокамерный'
               this.objValues.downRow = 'Приемный'
               this.totalPrice = 0;
               this.totalPrice += 10000;
               this.show1Calc();
            }else{
               this.objValues.type = "Двукамерный"
               this.objValues.downRow = 'Дренажный'
               this.totalPrice = 0;
               this.totalPrice += 15000;
               one = false;
               this.show2Calc();
             }
           },
           show1Calc(){
             allTitles[1].style.display = 'none';
             allSelects[2].style.display = 'none';
             allSelects[3].style.display = 'none';

             allTitles[0].style.display = 'block';
             allSelects[0].style.display = 'block';
             allSelects[1].style.display = 'block';
           },
           show2Calc(){
             allTitles[0].style.display = 'none';
             allSelects[0].style.display = 'none';
             allSelects[1].style.display = 'none';

             allTitles[1].style.display = 'block';
             allSelects[2].style.display = 'block';
             allSelects[3].style.display = 'block';
           },
           selectSum(){
             const activeSelects = wrapper.querySelectorAll('select');
             let some = 0;
             activeSelects.forEach((item,i) => {
               let index = item.options.selectedIndex;
               if (i === 0 && index !== 0) {
                    some += this.totalPrice * 0.2;
              }
               if (i === 1 && index === 1 || index === 3) {
                 some += this.totalPrice * 0.2;
              }else if (i === 1 && index === 2) {
                 some += this.totalPrice * 0.5;
              }
             })
             this.totalPrice += some;
           },
           checkNumbers(){
             const allselects = document.querySelectorAll('.diametre');
             allselects.forEach((item,i) => {
               item.addEventListener('change',() => {
                 const index = item.options.selectedIndex;
                 this.objValues.number = item.options[index].value;
               })
            })
           },
           countRing(){
             const allselects = document.querySelectorAll('.rings');
             allselects.forEach((item,i) => {
               item.addEventListener('change',() => {
                 const index = item.options.selectedIndex;
                 this.objValues.rings = item.options[index].value;
               })
            })
           },
           checkingDown(){
             const checkbox = document.querySelector('#myonoffswitch-two');
             if (one && checkbox.hasAttribute('checked')) {
               this.totalPrice += 1000;
               this.objValues.isBottom = true;
               return
             }else if(!one && checkbox.hasAttribute('checked')){
               this.totalPrice+= 2000;
               this.objValues.isBottom = true;
               return
             }
             this.objValues.isBottom = false;

           },
           showResult(){
             const result = document.querySelector('#calc-result');
             const lastRes = document.querySelector("#length");
             this.objValues.homeDistance = lastRes.value;
             result.value = this.totalPrice;
             this.objValues.endCost = this.totalPrice;

           },
           eventsListener(){
             const constWrapper = document.querySelector('#construct');
             constWrapper.addEventListener('change',() => this.start());
             const submitBtn = document.querySelector('#discount-popup');

             submitBtn.addEventListener('click',(e) => {
              let target = e.target;
              if (target.matches('#discount-popup button')) {
                postData(this.objValues)
                 .then(response => {
                   if (response.status !== 200) {
                     throw new Error("I can't connect to the server...")
                   }
                   console.warn('OK');
                 })
                 .catch(error => console.error(error))
              }
            })
           }

         }
         const postData = (body) => {
           return fetch('./server.php',{
             method:'POST',
             headers:{
               'Content-Type':'application/JSON'
             },
             body:JSON.stringify(body)
           })
         }
calcCount.eventsListener();
calcCount.start();
}
export default calc;
