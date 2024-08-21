$(document).ready(function(){
    $('#icon').click(function(){
      $('ul').toggleClass('show');
    })
  })

  let header = document.querySelector("header");
  
  window.onscroll = function(){
    if (this.scrollY >= 40){
      header.classList.add("header-active")
    }else{
      header.classList.remove("header-active")
    }
  }


  // var typed= new typed(".text-animation" ,{
  //   Strings:["frontend" , "web designer" , "mobile app"],
  //   typeSpeed:100,
  //   backSpeed:100,
  //   backDelay:1000,
  //   loop:true
  // })




  // let words = document.querySelector(".word");
  // words.forEach((word)=>{
  //   let letters = word.textContent.split("");
  //   word.textContent="";
  //   letters.forEach((letter)=>{
  //     let span = document.createElement("span");
  //     span.textContent = letter;
  //     span.className = "letter";
  //     word.append(span);
  //   })
  // })

 