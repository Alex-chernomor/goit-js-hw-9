import"./assets/style-CTWrbwQf.js";const s={email:"",message:""},t=document.querySelector(".feedback-form"),o=(a,e)=>{try{localStorage.setItem(a,JSON.stringify(e))}catch(l){console.log(l)}},r=a=>{try{const e=localStorage.getItem(a);return e===null?s:JSON.parse(e)}catch(e){console.log(e)}},m=()=>r("feedback-form-state"),n=a=>{a.preventDefault();const e=t.elements.email.value,l=t.elements.message.value;e.trim()===""||l.trim()===""?alert("Fill please all fields"):(s.email=e.trim(),s.message=l.trim(),console.log(s),localStorage.removeItem("feedback-form-state"),t.reset())},c=a=>{const e=t.elements.email.value,l=t.elements.message.value;s.email=e,s.message=l,o("feedback-form-state",s)};t.elements.email.value=m().email;t.elements.message.value=m().message;t.addEventListener("input",c);t.addEventListener("submit",n);
//# sourceMappingURL=2-form.js.map
