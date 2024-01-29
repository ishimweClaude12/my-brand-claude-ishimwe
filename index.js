const menu_btn = document.getElementById('burger');
const hidden_menu = document.getElementById('hidden_menu')

menu_btn.addEventListener('click', function(evt){

   //hidden_menu.style.display = 'block';
  //  hidden_menu.toggleAttribute(this.classList, hide)
  hidden_menu.classList.toggle('hide')
})