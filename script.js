// Starts document function
$(document).ready(function(){

// Appends the time to id-currentDay with moment.js
$("#currentDay").append(moment().format("dddd MMMM Do YYYY"+ " h:mm a"));




// Clear button
// $(".clear").on("click",function(){
//     console.log("HEllo")
//     $("#9 .description").val(localStorage.removeItem("9"))
//     localStorage.removeItem("time")
// })

// Adds time and text to local storage
$(".btn").on("click", function(){
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val()

    localStorage.setItem(time, text)
    console.log("hi")
})

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))
// Uses moment.js to change the blocks to past present or future. depending on the time 
function connectTime(){
    var timeNow = moment().hour();
    console.log(timeNow)

    $(".time-block").each(function(){
        var blockHour=parseInt($(this).attr("id"))
        if(blockHour<timeNow){
            $(this).addClass("past")
        }else if(blockHour===timeNow){
            $(this).removeClass("past");
            $(this).addClass("present")
        }else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future")
        }
    })
    
}

connectTime()
})
