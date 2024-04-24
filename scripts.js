let count = 0; /* assign zero to start counter
 */

const value = document.querySelector('#value');/* get val for display span from html */
const btn = document.querySelectorAll('.btn');/* selects all buttons in html using class btn name */

btn.forEach(function(btn){  // must use this after quesryselecall to get indiv class

    btn.addEventListener('click', function(e){ // specify each func for each click event for each btn

        const styles = e.currentTarget.classList;  // to list out the class names to match and give indv func
        if(styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count; // set text to display on page
    });

});
