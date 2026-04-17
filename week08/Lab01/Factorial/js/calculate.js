const factorial = (field) => {
  if (field === 0 || field === 1) 
    return 1
  
 let total = 1
 for (i = field-1; i > 1; i--) {
	 field *= i
 }
   return field
}
const form = document.querySelector("#factorialForm");

 form.addEventListener("submit", function(event) {
    event.preventDefault();

    
    const result = factorial(form.elements.num.value);

    form.elements.factorial.value = result;
 })

