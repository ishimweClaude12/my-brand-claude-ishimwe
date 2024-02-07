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

const blog_input = document.querySelector('#blog-title')
let blog_title = blog_input.value;
const content = document.querySelector('.fr-element').innerHTML;
const paragraphs = document.querySelector('img').parentNode.textContent
//const image = document.querySelector('img').src
const image = document.querySelector('img').src

// Define a blog object container
const id = Math.floor(Math.random() * 100)
const blog = {
    blog_title, 
    paragraphs, 
    image
}; 
localStorage.setItem(id, JSON.stringify(blog)  );
const articles = []
for(let i = 0; i <= 100 ; i ++){
    if(localStorage.getItem(i)) articles.push(JSON.parse(localStorage.getItem(i)))
}
blog_input.value = ''
// Dummy console logging
const dummy = document.getElementById('log')
const container = document.getElementById('container')
dummy.addEventListener('click', (e) =>{
   articles.forEach(art => {
    const img_element = document.createElement('img')
    const paragraph_element = document.createElement('div').innerHTML = art.paragraphs
    img_element.src = `${art.image}`
    img_element.alt = 'blog image'
    container.innerHTML += document.createElement('h1').textContent = `This is the title of the blog${art.blog_title}`
    console.log(paragraph_element, 'pppppppp')
    container.append(img_element, paragraph_element)
   })
   
})
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