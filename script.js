$(document).ready(
    function () {
        // Make a time block container for each hour
        // var firstHour = 9;
        // var lastHour = 17;

        // window.location.reload()

        var currentHour = moment().hour();
        console.log(currentHour);

        for (var i = 9; i <= 17; i++) {
            // create a new element for the time block
            // var newTimeBlock = document.createElement("div");

            //  newTimeBlock.innerHTML = "<p>" + moment().hour(i).format("ha") + "</p>";

            // Apply the timeblock class to the element
            //  newTimeBlock.innerHTML = i + "am";
            //   newTimeBlock.classList.add("timeblock");

            // Put a erfernce to the matching timelock
            var newTimeBlock = document.getElementById(i);

            // decide which additiona class to apply based on the the current time
            if (i < currentHour) {
                // this hour is in the oast
                newTimeBlock.classList.add("past");
            } else if (i == currentHour) {
            } else {
                // this hour is in the future
                newTimeBlock.classList.add("future");
            }

// LOADING GOES HERE

            // test that element is selected
            //   newTimeBlock.setAttribute("onclick", "alert('blah'), inputText;");


        }
    }

);

    $(document).on("click", "p.note", function(){
        var newInput = document.createElement("input");
        newInput.type = "text";
        newInput.classList.add("note");
        newInput.value = $(this).html();

        $(this).replaceWith(newInput);
        newInput.focus();
    }
    );

// $("p.note").click(
//     function () {
//         var newElement = document.createElement("input");
//         newElement.type = "text";
//         newElement.classList.add("note");
//         newElement.value = $(this).html();
//         newElement
//             .addEventListener("blur");
//         $(this).replaceWith(newElement);
//         newInput.focu();
//     }
// );

$(document).on("blur", "input.note", function(){
// create a <p> element
        var newParagraph = document.createElement("p");
        newParagraph.classList.add("note");
        newParagraph.innerHTML = $(this).val();

        $(this).replaceWith(newParagraph);
        
        //save goes here
    } 
);

