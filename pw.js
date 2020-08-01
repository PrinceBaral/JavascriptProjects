var btns= document.getElementById('btn');
var words = document.getElementById('pass');
   

btns.addEventListener('click' , function(event){
   // console.log(btns);
   var receivedType = words.getAttribute('type');

   if(receivedType == 'password') {
      words.setAttribute('type' , 'text');
      btns.classList.remove('fa-eye-slash');
      btns.classList.add('fa-eye');
   } else {
      words.setAttribute('type', 'password');
      btns.classList.toggle('fa-eye-slash');
   }
});
   

