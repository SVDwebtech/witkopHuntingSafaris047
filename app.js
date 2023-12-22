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
