/* Author: 
Inayatullah
*/
// accordian js start
let list = document.querySelectorAll('.data-item');
list.forEach(function (tab){
    tab.addEventListener('click', function (){
        let prevOpen = document.querySelector('.data-item.active');
        if(this.classList.contains('active')){
            this.classList.remove('active');
        }else{
             if(prevOpen){
            prevOpen.classList.remove('active');
        }
        tab.classList.add('active');
    }
    });
});
// accordian js end





















