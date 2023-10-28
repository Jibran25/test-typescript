import {getFormData} from './form'
const submit= document.getElementById('input') as HTMLFormElement;
submit.addEventListener('submit', function(e:SubmitEvent){
        e.preventDefault();
        console.log(getFormData);

})