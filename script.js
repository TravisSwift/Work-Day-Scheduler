$(document).ready(
    function () {
        // Make a time block container for each hour
        var firstHour = 9;
        var lastHour = 17;

        var currentHour = moment().hour();
        console.log(currentHour);

        for (var i = firstHour; i <= lastHour; i++) {
            // create a new element for the time block
            var newTimeBlock = document.createElement("div");

            newTimeBlock.innerHTML = "<p>" + moment().hour(i).format("ha") + "</p>";

            // Apply the timeblock class to the element
            //  newTimeBlock.innerHTML = i + "am";
            newTimeBlock.classList.add("timeblock");

            // decide which additiona class to apply based on the the current time
            if (i < currentHour) {
                // this hour is in the oast
                newTimeBlock.classList.add("past");
            } else if (i == currentHour) {
            } else {
                // this hour is in the future
                newTimeBlock.classList.add("future");
            }

            // test that element is selected
            newTimeBlock.setAttribute("onclick","alert('blah'), inputText;");  
        

            $(".container").append(newTimeBlock);


            /* var createTask = function(timeblock) {
            // edit time block
            var timeblock = $(addEventListener(onclick);
            console.log("clicked")
        } // */


            // On mouse-click, edit text

            /* function myFunction() {
               document.getElementById("timeblock").click(); 
             }  */


        }
    }

);