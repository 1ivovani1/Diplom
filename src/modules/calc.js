const calc = () => {
  const wrapper = document.querySelector('.constructor'),
        allBodies = Array.from(wrapper.querySelectorAll('.panel-collapse')),
        allConstructBtns = Array.from(wrapper.querySelectorAll('.construct-btn'));

allConstructBtns.forEach(item => {
  item.addEventListener('click', (e)=> {
    e.preventDefault();
    let target = e.target;

    if (target.matches('.construct-btn,.construct-btn span')) {
      const index = allConstructBtns.indexOf(target.closest('.construct-btn'));
      if (index + 1 !== allBodies.length) {
        allBodies[index + 1].style.display = 'block';
        calcCount.type();
      }else{
        calcCount.start();
        calcCount.eventsListener();

      }
   }
  })

});

 const toiletType = wrapper.querySelector('#myonoffswitch'),
       allTitles = Array.from(wrapper.querySelectorAll('.title-text')),
       allSelects = Array.from(wrapper.querySelectorAll('.select-box'));
       let one = true;

         const calcCount = {
           totalPrice:0,
           start(){
             this.type();
             this.selectSum();
             this.checkingDown();
             this.showResult();
           },
           type(){
             if (toiletType.hasAttribute('checked')) {
               this.totalPrice = 0;
               this.totalPrice += 10000;
               this.show1Calc();
            }else{
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

             allTitles[0].style.display = 'inline-block';
             allSelects[0].style.display = 'inline-block';
             allSelects[1].style.display = 'inline-block';
           },
           show2Calc(){
             allTitles[0].style.display = 'none';
             allSelects[0].style.display = 'none';
             allSelects[1].style.display = 'none';

             allTitles[1].style.display = 'inline-block';
             allSelects[2].style.display = 'inline-block';
             allSelects[3].style.display = 'inline-block';
           },
           selectSum(){
             const activeSelects = wrapper.querySelectorAll('select');
             let some = 0;
             activeSelects.forEach((item,i) => {
               const index = item.options.selectedIndex;
               if (i === 0 && index !== 0) {
                    some += this.totalPrice * 0.2;
               }
               if (i === 1 && index === 1) {
                 some += this.totalPrice * 0.2;
               }else if (i === 1 && index === 2) {
                 some += this.totalPrice * 0.5;
               }
             })
             this.totalPrice += some;
           },
           checkingDown(){
             const checkbox = document.querySelector('#myonoffswitch-two');
             if (one && checkbox.hasAttribute('checked')) {
               this.totalPrice += 1000;
             }else if(!one && checkbox.hasAttribute('checked')){
               this.totalPrice+= 2000;
             }
             console.log(this.totalPrice);

           },
           showResult(){
             const result = document.querySelector('#calc-result');
             result.value = this.totalPrice;
           },
           eventsListener(){
             const constWrapper = document.querySelector('#construct');
             constWrapper.addEventListener('change',() => {
               this.start();
               console.log('LOL');
             });

           }

         }


}
export default calc;
