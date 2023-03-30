var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
const ball = document.querySelector("#ckcBox");
elems.forEach(function(html) {
var switchery = new Switchery(html,{ color: '#4C40F7', secondaryColor : '#4C40F7',jackColor: '#fff'});
});

ball.addEventListener('change', (e) => {
    if (e.currentTarget.checked) {
        console.log("checked")
      
    } else {
      console.log("non-check")
      
      
    }
  })