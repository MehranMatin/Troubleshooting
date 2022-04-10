// // Not Working
// var question1 = document.getElementsByClassName('faqQuestion-1');
// var answer1 = document.getElementsByClassName('faqAnswer-1');
// function toggleVisibility1(answer1) {
//     if (answer1.className === 'hidden') {
//         answer1.className = 'visible';

//     } else {
//         answer1.className = 'hidden';
//     }
// }
// question1.addEventListener('click', function() {
//     toggleVisibility1(answer1);
// })


// Working
var question2 = document.querySelectorAll('.faqQuestion-2');
var answer2 = document.querySelectorAll('.faqAnswer-2');
console.log(question2);
console.log(answer2);

function toggleVisibility2(answer2) {
    if (answer2.className === 'hidden') {
        // answer2.style.visibility = 'visible';
        answer2.className = 'visible';
    } else {
        answer2.style.visibility = 'hidden';
    }
}

question2.addEventListener('click', function() {
    toggleVisibility2(answer2);
})