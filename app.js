let fields = document.querySelectorAll('.field');

for (let i=0; i<fields.length; i++){
    fields[i].firstElementChild.addEventListener('focus', () => {
    
             fields[i].querySelector('label').classList.add('top');
             fields[i].querySelector('.border').style.transform='scale(1)';
    });  
    fields[i].firstElementChild.addEventListener('blur', () => {
            if(fields[i].firstElementChild.value.length <=0){
               fields[i].querySelector('label').classList.remove('top'); 
               fields[i].querySelector('.border').style.transform='scale(0)';
            }
            
        }
    )};