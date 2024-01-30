const open_btn = document.getElementById('burger');
const hidden_menu = document.getElementById('hidden_menu')
const close_btn = document.getElementById('close')

open_btn.addEventListener('click', function(evt){

   //hidden_menu.style.display = 'block';
  //  hidden_menu.toggleAttribute(this.classList, hide)
  close_btn.classList.toggle('hide')
  hidden_menu.classList.toggle('hide')
  open_btn.classList.add('hide')
})

close_btn.addEventListener('click', function(evt){
    hidden_menu.classList.toggle('hide')
    open_btn.classList.remove('hide')
    close_btn.classList.add('hide')
})

// Form validation
const inputs = document.querySelectorAll('input');
// regex patterns
const patterns = {
        telephone: /^\d{10}$/,
        last_name: /^[a-z]{4,12}$/i,
        first_name: /^[a-z]{4,12}$/i,
        password: /^[\d\w@-]{8,20}$/i,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        //             yourname @ domain   .  com          ( .uk )
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
         field.className = 'valid';
        field.classList.add('valid')
        console.log('valid')
    } else {
        field.className = 'invalid';
       console.log('invalid')
     
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            // console.log(patterns[e.target.attributes.name.value]);
            validate(e.target, patterns[e.target.attributes.name.value]);
    });
});

