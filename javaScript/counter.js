let counter = 0;

        function count() {
            counter+=1;
            document.querySelector('h1').innerHTML = counter;

            if(counter%10 === 0) {
                alert(`El resultado del contador es ${counter}, además es multiplo de 10`);
            }

        }

        document.addEventListener('DOMContentLoaded', function() {
            //document.querySelector('button').onclick = count;
            document.querySelector('button').onclick = count;
        });