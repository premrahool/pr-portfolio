   //Header fix on scroll

   window.onscroll = function () { myFunction() };

   var header = document.getElementById("mainNavbar");
   var sticky = header.offsetTop;

   function myFunction() {
       console.log("value",window.pageYOffset);
       if (window.pageYOffset > sticky) {
           header.classList.add("stickyHead");
       } else {
           header.classList.remove("stickyHead");
       }
   }
