$(document).ready(function() {

  // make bg masonry
  var colcade = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item'
  });



  // by default, hide the closeup

  $(".closeupContainer").hide();
  $(".back").hide();

  // add images to the pins

  let pins = document.getElementsByClassName("grid-item");

  let addImages = function(pins) {
    for (let i = 0; i < pins.length; i++) {
      let pin = pins[i];
      pin.style.backgroundImage = "url('assets/img/pin" + [i] + ".jpg')"; 
      pin.style.backgroundSize = "cover";
      pin.style.backgroundPosition = "center center";
    }

    
  }

  addImages(pins);

  // bottom right
  let bottomRight = document.createElement("div");
  bottomRight.className = "bottom-right";

  let plus = document.createElement("img");
  plus.className = "bottom-right-icon plus";
  plus.src = "assets/img/plus.svg";

  let questionMark = document.createElement("img");
  questionMark.className = "bottom-right-icon question-mark";
  questionMark.src = "assets/img/question-mark.svg";

  bottomRight.append(plus);
  bottomRight.append(questionMark);
  $(".app").append(bottomRight);



  // make education modal

  let modal = document.createElement("div");
  modal.className = "modal";
  $(".app").append(modal);

  let modalBg = document.createElement("div"); 
  modalBg.className = "modal-bg";
  modal.append(modalBg);

  // make carousel dots 

  let modalDotsContainer = document.createElement("div");
  modalDotsContainer.className = "modal-dots-container";
  modal.append(modalDotsContainer);

  let modalDot1 = document.createElement("div");
  modalDot1.className = "modal-dot";
  modalDotsContainer.append(modalDot1);

  let modalDot2 = document.createElement("div");
  modalDot2.className = "modal-dot";
  modalDotsContainer.append(modalDot2)

  let modalDot3 = document.createElement("div");
  modalDot3.className = "modal-dot";
  modalDotsContainer.append(modalDot3);

  // make each modal content card

  let modalContentCards = document.createElement("div");
  modalContentCards.className = "modal-content-cards";
  modal.append(modalContentCards);


  for (let i = 0; i < 3; i++) {

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContentCards.append(modalContent)

    let modalText = document.createElement("div");
    modalText.className = "modal-text";
    modalContent.append(modalText);

    let modalSubtext = document.createElement("div")
    modalSubtext.className = "modal-subtext";
    modalContent.append(modalSubtext);

    let modalButton = document.createElement("div");
    modalContent.append(modalButton);

    if (i == 0) {
      // text
      modalText.innerHTML = "Click on an idea you like to learn more about it";
      modalSubtext.innerHTML = "Ideas are links from all over";
      modalButton.innerHTML = "Next";
      modalButton.className = "modal-button modal-button-0"

    } else if (i == 1) {
      modalText.innerHTML = "Save ideas to boards";
      modalSubtext.innerHTML = "The more you save, the better our recommendations for you.";
      modalButton.innerHTML = "Next";
      modalButton.className = "modal-button modal-button-1"

    } else if (i == 2) {
      modalText.innerHTML = "Make boards for all the projects in your life";
      modalSubtext.innerHTML = "Every project begins with ideas.";
      modalButton.innerHTML = "Got it";
      modalButton.className = "modal-button modal-button-2"

    }

  }


  let modalX = document.createElement("img");
  modalX.className = "modal-X";
  modalX.src = "assets/img/x.svg";

  $(modal).mouseenter(function(){
    modal.append(modalX);
  });

  $(modal).mouseleave(function(){
    modal.removeChild(modalX);
  })

  //starburst animate
  let starburst = document.createElement("div");
  starburst.className = "starburst";
  modalBg.append(starburst);

  // lottie starburst

  let starburstAnimate = lottie.loadAnimation({
    container: starburst, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/private_files/lf30_vfraff5d.json' // the path to the animation json
  });


  function firstHFCard() {


    if ($(modalDot2).hasClass("modal-dot-active")) {
      //transition from step 2 



    } else if ($(modalDot3).hasClass("modal-dot-active")) {
      $(modalDot3).removeClass("modal-dot-active");


      // transition from step 3


    }

    // this is the first step
    $(modalDot1).addClass("modal-dot-active");
    $(modalDot2).removeClass("modal-dot-active");
    $(".modal-content-cards").css("margin-left", "200%")


    setTimeout(function(){ 
      starburstAnimate.playSegments([[0,85],[0,85]], true);
    }, 1200);

    // starburstAnimate.play(0);
    // console.log("heyho")





  }


  function secondHFCard() {

    // if from the second closeup card 


    if ($(modalDot2).hasClass("modal-dot-active")) {

      // transition from step 2 masonry 


    } else if ($(modalDot3).hasClass("modal-dot-active")) {
      $(modalDot3).removeClass("modal-dot-active");

      //transition from step 3 




    }



    // modal dot transition
    $(modalDot1).removeClass("modal-dot-active");  
    $(modalDot2).addClass("modal-dot-active");  
    $(".modal-content-cards").css("margin-left", "0%");


    starburstAnimate.playSegments([[85,160], [120,160]], true);


  }



  function secondCloseupCard() {

    // if from the third step
    if ($(modalDot3).hasClass("modal-dot-active")) {
      $(modalDot3).removeClass("modal-dot-active");

      // transition from 3rd step 


    } 


     // modal dot transition
    $(modalDot1).removeClass("modal-dot-active");  
    $(modalDot2).addClass("modal-dot-active");  
    $(".modal-content-cards").css("margin-left", "0%")

    starburstAnimate.playSegments([[85,160], [120,160]], true);



  }




  // let starburst = document.createElement("div");
  // starburst.className = "starburst";
  // modalBg.append(starburst);

  // // lottie starburst

  // let starburstAnimate = lottie.loadAnimation({
  //   container: starburst, // the dom element that will contain the animation
  //   renderer: 'svg',
  //   loop: false,
  //   autoplay: false,
  //   path: 'https://assets1.lottiefiles.com/packages/lf20_hbkV3h.json' // the path to the animation json
  // });



  function thirdHFCard() {


    // modal dot transition
    $(modalDot3).addClass("modal-dot-active");  
    $(modalDot2).removeClass("modal-dot-active");  
    $(".modal-content-cards").css("margin-left", "-200%")


    // border-radius & width transition with CSS is smoother

    $(".item-main").removeClass("item-closeup");
    $(".item-main").addClass("item-board");

    starburstAnimate.playSegments([[160,264], [215,264]], true);


    // make board rep

    // play lottie

    // setTimeout(function(){ 
    //   starburstAnimate.goToAndPlay(0)
    // }, 1900);
    

  }





  // customize animation for the hf 

  if ($('body').is('.homefeedPage')) {

    firstHFCard(); 



    $(".modal-button-0").click(function() {
      secondHFCard();

    });


  }

  // button nav inside the modal

  $(".modal-button-1").click(function() {
    thirdHFCard();

  });



  $(".modal-button-2").click(function() {
   $(modal).hide()


  });


  $(".modal-X").click(function() {
   $(modal).hide()


  });




  // grid item to closeup
  $(".grid-item").click(function() {

    $(".closeupContainer").show();
    $(".back").show();

    let image = $(this)[0].style.backgroundImage;

    $(".closeupImage").css('background-image', image);  

    secondCloseupCard();


    // localStorage.setItem("imageURL", image);



  });


  $(".back").click(function() {

    $(".closeupContainer").hide();
    $(".back").hide()

    secondHFCard();

    // firstHFCard();



  });


  $(".navIcon").click(function() {

    window.location.href = "index.html";


  });

  
  let pulsar = document.createElement("div");
  pulsar.className = "pulsar";
  $(".saveButton").append($(pulsar));
  $(pulsar).css("animation-name", "pulse");
  $(pulsar).css("animation-duration", "5s");
  $(pulsar).css("animation-iteration-count", "infinite");
  // $(pulsar).css("animation-direction", "alternate");



  





  



});