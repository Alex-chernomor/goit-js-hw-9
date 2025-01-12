const formData={
    email:"",
    message:""
};

const formEl = document.querySelector('.feedback-form');

const saveDataLS = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
        console.log(err);
    }
};

const loadDataLS = key =>{
    try {
        const dataFromLS = localStorage.getItem(key);

        return dataFromLS === null ? formData : JSON.parse(dataFromLS)
    } catch (err) {
        console.log(err);
    }
}

const getFormDataFromLS = () =>{
    const dataFromLS = loadDataLS('feedback-form-state');

    return dataFromLS
};

const submitListener =  (e)=>{
    e.preventDefault();
    
    const mailValue = formEl.elements.email.value;
    const messageValue = formEl.elements.message.value;
    
    if (mailValue.trim() === "" || messageValue.trim() === "") {
        alert('Fill please all fields')
    } 
    else {
        formData.email = mailValue.trim();
        formData.message = messageValue.trim();
  
        console.log(formData);
     
        localStorage.removeItem('feedback-form-state');
        formEl.reset();
    }
    
}

const inputListener = (e) =>{
    const mailValue = formEl.elements.email.value;
    const messageValue = formEl.elements.message.value;

    formData.email = mailValue;
    formData.message = messageValue;
    
    saveDataLS('feedback-form-state', formData);
} 

formEl.elements.email.value = getFormDataFromLS().email;
formEl.elements.message.value = getFormDataFromLS().message;
 
formEl.addEventListener('input', inputListener);
formEl.addEventListener('submit', submitListener);


