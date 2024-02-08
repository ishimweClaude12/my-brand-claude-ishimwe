const current_URL = document.URL;       
         var editor = new FroalaEditor('#example', {
// Set the save param.
saveParam: 'content',

// Set the save URL.
saveURL: current_URL,

// HTTP request type.
saveMethod: 'GET',

// Additional save params.
saveParams: {id: 'example'},

events: {
'save.before': function () {
// Before save request is made.
console.log('The request was made')
},

'save.after': function (res) {

},

'save.error': function () {
// Do something here.
consol.log('Oops!')
}
}
})

document.querySelector('#saveButton').addEventListener("click", function () {

const blog_title = document.querySelector('#blog-title').value;
const content = document.querySelector('.fr-element').innerText;
const id = Math.floor(Math.random() * 100)
   const file = document.querySelector("input[type=file]").files[0];
   const reader = new FileReader();
   reader.addEventListener(
     "load",
     () => {
       // convert image file to base64 string
        const blog = {
            id,
            blog_title, 
            content, 
            image : reader.result
        };
        window.localStorage.setItem(id, JSON.stringify(blog))
     },
     false,
   );
 
   if (file) {
     reader.readAsDataURL(file);
   }
editor.save.save();
})    


// Form validation
const blg_title = document.getElementById('blog-title');
// regex pattern
const patterns = {
        message: /^\w{20}/
        
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid'
    } else {
        field.className = 'invalid'
    }

}
blg_title.addEventListener('keyup', (e) => {
               validate(e.target,patterns.message)
        });