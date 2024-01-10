/////////////////////////    App Logic    ///////////////////////////////
const hamburgerBtn = document.querySelector('.hamburgerBtn');

const hamburgerTopBar = document.querySelector(".hamburgerBtn__hamburgerBar--top");
const hamburgerMiddleBar = document.querySelector(".hamburgerBtn__hamburgerBar--middle");
const hamburgerBottomBar = document.querySelector(".hamburgerBtn__hamburgerBar--bottom");

const hamburgerMenu = document.querySelector('.navList');

const navItems = document.querySelectorAll('.navItem');

const navItem1 = document.querySelector('.navItem1');
const navItem2 = document.querySelector('.navItem2');
const navItem3 = document.querySelector('.navItem3');
const navItem4 = document.querySelector('.navItem4');
const navItem5 = document.querySelector('.navItem5');
const navItem6 = document.querySelector('.navItem6');
const navItem7 = document.querySelector('.navItem7');
const navItem8 = document.querySelector('.navItem8');
const navItem9 = document.querySelector('.navItem9');

const profilePhoto = document.querySelector('.profilePhoto');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbarSection');
const navFrame = document.querySelector('.navFrame');

const footer = document.querySelector('.footer');

const hero = document.querySelector('.heroSection');


// // //////////////////////////////////////////////////////////////////////////////////////////
// // // Terms and Conditions pop-up logic
// // //////////////////////////////////////////////////////////////////////////////////////////
// const termsAndConditionsBtn = document.querySelector('.termsAndConditionsBtn');
// const tsAndCsCloseBtn = document.querySelector('.termsAndConditionsCloseBtn');
// const tsAndCs = document.querySelector('.tsAndCs');

// termsAndConditionsBtn.addEventListener('click', function() {
//   if(tsAndCs.classList.contains('hidden')) {
//     tsAndCs.classList.remove('hidden');
//   } 
// });

// tsAndCsCloseBtn.addEventListener('click', function() {
//       tsAndCs.classList.add('hidden');
// });


/////////////////////////////////////////////////////////////////////////////////////////

let footerHeight = footer.offsetHeight;
console.log(`${window.innerHeight - footerHeight}px`);

let height = navbar.offsetHeight;
navFrame.style.height = `${height}px`;

visualViewport.addEventListener("resize", () => {
  height = navbar.offsetHeight;
  navFrame.style.height = `${height}px`;

  console.log(`navbar height = ${navbar.offsetHeight}`);
  console.log(`navFrame height = ${navFrame.offsetHeight}`);
});


window.addEventListener('resize', function(){
  footerHeight = footer.offsetHeight;
});

hamburgerBtn.addEventListener('click', () => {
  
  console.log(`navbar offsetHeight = ${navbar.offsetHeight}`);
  navFrame.style.height = `${height}px`;
  console.log(`navFrame offsetHeight = ${navFrame.offsetHeight}`);
  
  if (!hamburgerTopBar.classList.contains('hamburgerBtn__hamburgerBar--right')) {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 200);
  } else {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);
    
    if(window.scrollY < 200 && !hamburgerMenu.classList.contains('navList--displayNone')){
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
    }
  }
  
  if(hamburgerMenu.classList.contains('navList--displayNone')) {
    hamburgerMenu.classList.remove('navList--displayNone');
    hamburgerMenu.classList.add('navList--display');
    for(let item of navItems) {
      item.style.opacity = "0";
    }
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--navListMoveOut');
      hamburgerMenu.classList.add('navList--navListMoveIn');
      for(let item of navItems) {
        item.classList.remove('navItem--moveOut');
        item.classList.add('navItem--moveIn');
      }
      navItem1.style.animationDelay = '.70s';
      navItem2.style.animationDelay = '.80s';
      navItem3.style.animationDelay = '.90s';
      navItem4.style.animationDelay = '1.00s';
      navItem5.style.animationDelay = '1.10s';
      navItem6.style.animationDelay = '1.20s';
      navItem7.style.animationDelay = '1.30s';
      navItem8.style.animationDelay = '1.40s';
      navItem9.style.animationDelay = '1.50s';
    }, 20);
  } else {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    navItem9.style.animationDelay = '.50s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 2000);
  }  
});

window.onscroll = () => {
  setTimeout(() => {
    if(window.scrollY > 200) 
    {  
      navbar.style.visibility = "visible";
      navbar.style.opacity = "1";
      navbar.classList.add('navbar--background');
    }

    else if(window.scrollY < 200 && hamburgerMenu.classList.contains('navList--displayNone'))
    {
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
      termsAndConditions.classList.add('termsAndConditions-displayNone');
      legalOpenIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.add('openAndCloseIcons__icon--displayNone');
      
    }
  }, 500);
   
}

for(let item of navItems) {
  item.addEventListener('click', () => {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    navItem9.style.animationDelay = '.50s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 1200);

    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);

    setTimeout(() => {
      if(window.scrollY < 200 ){
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
        navbar.classList.remove('navbar--background');
      }
    }, 800);
  });
}

/////////////////////////    FAQ button logic    ///////////////////////////////

document.addEventListener('DOMContentLoaded', function () {  //  In summary, this is setting up an event listener that waits for the HTML document to be fully loaded and parsed. Once that happens, the provided callback function is executed. This is a common practice to ensure that the JavaScript code runs after the HTML document is ready, avoiding potential issues with trying to manipulate elements that haven't been loaded yet.
    // Select all faqItem elements on the page
    const faqItems = document.querySelectorAll('.faqItem');

    // Loop through each faqItem
    faqItems.forEach(function (faqItem) {
        // Select relevant elements within the faqItem
        const faqBtnRight = faqItem.querySelector('.faqBtnRight');
        const faqBtnLeft = faqItem.querySelector('.faqBtnLeft');
        const faqQuestion = faqItem.querySelector('.faqQuestion');
        const faqAnswer = faqItem.querySelector('.faqAnswer');

        // Add click event listener for the faqBtnRight button
        faqBtnRight.addEventListener('click', function () {
            // hide faqQuestion & button
            faqQuestion.classList.remove('animateShow');
            faqQuestion.classList.add('animateHide');
            faqBtnRight.classList.remove('animateShow');
            // faqBtnRight.classList.add('animateHide');
            faqBtnRight.classList.toggle('displayNone')
            // delay next functions so that animateHide can finish first
            setTimeout(function(){
                faqQuestion.classList.toggle('displayNone');
                // faqBtnRight.classList.toggle('displayNone');
                faqAnswer.classList.toggle('displayNone');
                faqBtnLeft.classList.toggle('displayNone');
                // show faqAnswer & button
                faqAnswer.classList.remove('animateHide');
                faqAnswer.classList.add('animateShow');
                faqBtnLeft.classList.remove('animateHide');
                faqBtnLeft.classList.add('animateShowButton');
            }, 500);
        });

        // Add click event listener for the faqBtnLeft button
        faqBtnLeft.addEventListener('click', function () {
            // hide faqAnswer & button
            faqAnswer.classList.remove('animateShow');
            faqAnswer.classList.add('animateHide');
            faqBtnLeft.classList.remove('animateShow');
            // faqBtnLeft.classList.add('animateHide');
            faqBtnLeft.classList.toggle('displayNone');
            // delay next functions so that animateHide can finish first
            setTimeout(function(){
                // show faqQuestion & button
                faqQuestion.classList.toggle('displayNone');
                faqBtnRight.classList.toggle('displayNone');
                faqAnswer.classList.toggle('displayNone');
                // faqBtnLeft.classList.toggle('displayNone');
                // show faqQuestion & button
                 faqQuestion.classList.remove('animateHide');
                 faqQuestion.classList.add('animateShow');
                 faqBtnRight.classList.remove('animateHide');
                 faqBtnRight.classList.add('animateShowButton');
            }, 500);
        });
    });
});

    
/////////////////////////    FAQ button logic    ///////////////////////////////
