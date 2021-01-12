//First i have to know if i already have the counter value 
    if(!localStorage.getItem('counter')) {
        localStorage.setItem('counter', 0)
    }


        function count() {
            //i get the value that is local storaged
            let counter = localStorage.getItem('counter');
            counter++;
            document.querySelector('h1').innerHTML = counter;
            //update the counter value in the local sorage
            localStorage.setItem('counter', counter);
            
            //When a value is divided by 10, call the alert and show it on the screen. 
            if(counter%10 === 0) {
                alert(`El resultado del contador es ${counter}, además es multiplo de 10`);
            }

        }

        document.addEventListener('DOMContentLoaded', function() {
            //I initialice the h1 elem with the value that i've got in 
            //the local storage. 
            document.querySelector('h1').innerHTML = localStorage.getItem('counter');
            //This is functional programming. 
            //Assign a function to a variable.
            document.querySelector('button').onclick = count;

        });