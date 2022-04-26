function navbarResponsive() {
  let nav = document.querySelector("#nav2");

  nav.classList.toggle("active");
}

/************************************************************** */

let set = document.querySelector("#grille");
let open = set.querySelectorAll(".grid-item");
let close = document.querySelector("#close");

let grid1 = document.querySelector("#grid1");
let grid2 = document.querySelector("#grid2");
let grid3 = document.querySelector("#grid3");
let grid4 = document.querySelector("#grid4");
let grid5 = document.querySelector("#grid5");
let grid6 = document.querySelector("#grid6");

open.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e);
    if (e == grid1) {
      popup.classList.add("show");
      pop1.classList.add("show");
    }

    if (e == grid2) {
      popup.classList.add("show");
      pop2.classList.add("show");
    }

    if (e == grid3) {
      popup.classList.add("show");
      pop3.classList.add("show");
    }

    if (e == grid4) {
      popup.classList.add("show");
      pop4.classList.add("show");
    }

    if (e == grid5) {
      popup.classList.add("show");
      pop5.classList.add("show");
    }

    if (e == grid6) {
      popup.classList.add("show");
      pop6.classList.add("show");
    }
  });
});

close.addEventListener("click", () => {
  popup.classList.remove("show");
  pop1.classList.remove("show");
  pop2.classList.remove("show");
  pop3.classList.remove("show");
  pop4.classList.remove("show");
  pop5.classList.remove("show");
  pop6.classList.remove("show");
});

/************************************************************************/
function flip(b) {
  if (b == "b1") {
    before.classList.add("active");
  }
  if (b == "b2") {
    before.classList.remove("active");
  }
  if (b == "b3") {
    today.classList.add("active");
  }
  if (b == "b4") {
    today.classList.remove("active");
  }
  if (b == "b5") {
    future.classList.add("active");
  }
  if (b == "b6") {
    future.classList.remove("active");
  }
}

/************************************************************************/
function skill(a) {
  if (a == "s1") {
    document.querySelector("#skills_two_2").classList.remove("active");
    document.querySelector("#skills_two_3").classList.remove("active");
    document.querySelector("#skills_two_4").classList.remove("active");
    document.querySelector("#skills_two_5").classList.remove("active");
    document.querySelector("#skills_two_6").classList.remove("active"); //ok
    document.querySelector("#skills_two_7").classList.remove("active");
    document.querySelector("#skills_two_8").classList.remove("active");
    document.querySelector("#skills_two_1").classList.add("active");
  }

  if (a == "s2") {
    document.querySelector("#skills_two_1").classList.remove("active");
    document.querySelector("#skills_two_3").classList.remove("active");
    document.querySelector("#skills_two_4").classList.remove("active");
    document.querySelector("#skills_two_5").classList.remove("active");
    document.querySelector("#skills_two_6").classList.remove("active"); //ok
    document.querySelector("#skills_two_7").classList.remove("active");
    document.querySelector("#skills_two_8").classList.remove("active");
    document.querySelector("#skills_two_2").classList.add("active");
  }
  if (a == "s3") {
    document.querySelector("#skills_two_1").classList.remove("active");
    document.querySelector("#skills_two_2").classList.remove("active");
    document.querySelector("#skills_two_4").classList.remove("active");
    document.querySelector("#skills_two_5").classList.remove("active"); //ok
    document.querySelector("#skills_two_6").classList.remove("active");
    document.querySelector("#skills_two_7").classList.remove("active");
    document.querySelector("#skills_two_8").classList.remove("active");
    document.querySelector("#skills_two_3").classList.add("active");
  }
  if (a == "s4") {
    document.querySelector("#skills_two_1").classList.remove("active");
    document.querySelector("#skills_two_2").classList.remove("active");
    document.querySelector("#skills_two_3").classList.remove("active");
    document.querySelector("#skills_two_5").classList.remove("active");
    document.querySelector("#skills_two_6").classList.remove("active"); //ok
    document.querySelector("#skills_two_7").classList.remove("active");
    document.querySelector("#skills_two_8").classList.remove("active");
    document.querySelector("#skills_two_4").classList.add("active");
  }
  if (a == "s5") {
    document.querySelector("#skills_two_1").classList.remove("active");
    document.querySelector("#skills_two_2").classList.remove("active");
    document.querySelector("#skills_two_3").classList.remove("active");
    document.querySelector("#skills_two_4").classList.remove("active");
    document.querySelector("#skills_two_6").classList.remove("active"); //ok
    document.querySelector("#skills_two_7").classList.remove("active");
    document.querySelector("#skills_two_8").classList.remove("active");
    document.querySelector("#skills_two_5").classList.add("active");
  }
  if (a == "s6") {
    document.querySelector("#skills_two_1").classList.remove("active");
    document.querySelector("#skills_two_2").classList.remove("active");
    document.querySelector("#skills_two_3").classList.remove("active");
    document.querySelector("#skills_two_4").classList.remove("active");
    document.querySelector("#skills_two_5").classList.remove("active");
    document.querySelector("#skills_two_7").classList.remove("active"); //ok
    document.querySelector("#skills_two_8").classList.remove("active");
    document.querySelector("#skills_two_6").classList.add("active");
  }
  if (a == "s7") {
    document.querySelector("#skills_two_1").classList.remove("active");
    document.querySelector("#skills_two_2").classList.remove("active");
    document.querySelector("#skills_two_3").classList.remove("active");
    document.querySelector("#skills_two_4").classList.remove("active");
    document.querySelector("#skills_two_5").classList.remove("active");
    document.querySelector("#skills_two_6").classList.remove("active"); //ok
    document.querySelector("#skills_two_8").classList.remove("active");
    document.querySelector("#skills_two_7").classList.add("active");
  }

  if (a == "s8") {
    document.querySelector("#skills_two_1").classList.remove("active");
    document.querySelector("#skills_two_2").classList.remove("active");
    document.querySelector("#skills_two_3").classList.remove("active");
    document.querySelector("#skills_two_4").classList.remove("active");
    document.querySelector("#skills_two_5").classList.remove("active"); //ok
    document.querySelector("#skills_two_6").classList.remove("active");
    document.querySelector("#skills_two_7").classList.remove("active");
    document.querySelector("#skills_two_8").classList.add("active");
  }

  // let open = set.querySelectorAll(".b_skill");

  // let grid1 = document.querySelector("#grid1");
  // let grid2 = document.querySelector("#grid2");
  // let grid3 = document.querySelector("#grid3");
  // let grid4 = document.querySelector("#grid4");
  // let grid5 = document.querySelector("#grid5");
  // let grid6 = document.querySelector("#grid6");

  // open.forEach((e) => {
  //   e.addEventListener("click", () => {
  //     console.log(e);
  //     for (let i = 1; i < 9; index++) {
  //       if (e == i) {
  //         document.querySelector("#skills_two_" + e).classList.add("active");
  //       } else {
  //         document.querySelector("#skills_two_" + e).classList.remove("active");
  //       }
  //     }
  //   });
  // });

  if (menu.classList.contains("active") == true) {
    document.querySelector("#skills_one").classList.add("active");
  }
}
/***********************************************************************/
let toggle = document.querySelector(".toggle");
let menu = document.querySelector("#menu");
toggle.onclick = function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active") == false) {
    document.querySelector("#skills_one").classList.remove("active");
    document.querySelector("#skills_two_1").classList.remove("active");
    document.querySelector("#skills_two_2").classList.remove("active");
    document.querySelector("#skills_two_3").classList.remove("active");
    document.querySelector("#skills_two_4").classList.remove("active");
    document.querySelector("#skills_two_5").classList.remove("active"); //ok
    document.querySelector("#skills_two_6").classList.remove("active");
    document.querySelector("#skills_two_7").classList.remove("active");
    document.querySelector("#skills_two_8").classList.remove("active");
  }
};

/**********************************************************************Scroll to the top*/
function scroll_top() {
  window.scrollTo({ behavior: "smooth", top: 0 });
}
/**********************************************************************Scroll-smooth*/
const links = document.querySelectorAll("#nav2 a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  let href = this.getAttribute("href");
  let offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
  let nav = document.querySelector("#nav2");
  nav.classList.toggle("active");
}

/**********************************************************************contact*/

function contact() {
  let contact = document.querySelector(".contact_form");
  let contact_wrap = document.querySelector("#contact_wrap");
  contact.classList.toggle("active");
  contact_wrap.classList.toggle("active");
}

function stage() {
  let stage = document.querySelector("#stage");
  let veille = document.querySelector("#veille");
  stage.classList.add("active1");
  veille.classList.add("active2");
}

function stage_remove() {
  let stage = document.querySelector("#stage");
  let veille = document.querySelector("#veille");
  stage.classList.remove("active1");
  veille.classList.remove("active2");
}

function veille() {
  let veille = document.querySelector("#veille");
  let stage = document.querySelector("#stage");
  veille.classList.add("active1");
  stage.classList.add("active2");
}

function veille_remove() {
  let veille = document.querySelector("#veille");
  let stage = document.querySelector("#stage");
  veille.classList.remove("active1");
  stage.classList.remove("active2");
}

/**********************************************************************Mail*/
function send_mail() {
  var tempParams = {
    from_object: document.getElementById("objet").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_0u5ui0c", "template_2e5bguq", tempParams);
}

/**********************************************************************Slide Veille*/

let img_slider = document.getElementsByClassName("slide_veille_js");
let position = 0;
let nbr_img = img_slider.length;

let precedent = document.querySelector(".precedent");
let suivant = document.querySelector(".suivant");

function remove_veille_img() {
  for (let i = 0; i < nbr_img; i++) {
    img_slider[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  position++;
  if (position >= nbr_img) {
    position = 0;
  }
  remove_veille_img();
  img_slider[position].classList.add("active");
});

precedent.addEventListener("click", function () {
  position--;
  if (position < 0) {
    position = nbr_img - 1;
  }
  remove_veille_img();
  img_slider[position].classList.add("active");
});

/**********************************************************************Slide Stage*/

let img_slider2 = document.getElementsByClassName("slide_veille_js2");
let position2 = 0;
let nbr_img2 = img_slider2.length;

let precedent2 = document.querySelector(".precedent2");
let suivant2 = document.querySelector(".suivant2");

function remove_veille_img() {
  for (let i = 0; i < nbr_img2; i++) {
    img_slider2[i].classList.remove("active");
  }
}

suivant2.addEventListener("click", function () {
  position2++;
  if (position2 >= nbr_img2) {
    position2 = 0;
  }
  remove_veille_img();
  img_slider2[position2].classList.add("active");
});

precedent2.addEventListener("click", function () {
  position2--;
  if (position2 < 0) {
    position2 = nbr_img2 - 1;
  }
  remove_veille_img();
  img_slider2[position2].classList.add("active");
});
