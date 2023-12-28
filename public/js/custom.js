// let regExp =  /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
// let regExp = /^[^ ]+@[^ ]+\.[a-z]{3}$/
let regExp = /^[^ ]+@[^ ]+\.com$/

$(document).ready(()=>{
  $("#newsletter_button").click(()=>{
    if($('#newsletter_email').val() == "" ){
        $('#newsletter_email').addClass("bg-red-100 text-red-400 border-red-400")        
        $('.error-message').text("Email is required").removeClass("invisible")
    }else if(!($.trim($('#newsletter_email').val()).match(regExp))){
        $('#newsletter_email').addClass("bg-red-100 text-red-400 border-red-400")
        $('.error-message').text("Enter a valid email").removeClass("invisible")       
    }else{
        console.log('success')
        $(".newsletter-success").addClass("translate-x-0")
        $(".newsletter-container").addClass('xl:w-[35%]')
        $("span").text($("#newsletter_email").val())
        // $(".newsletter-success").removeClass("hidden")
        $(".newsletter").addClass("-translate-x-[120%]")
    }
  })

  $("#newsletter_dismiss").click(()=>{
    console.log("dismiss")
    $(".newsletter-success").removeClass("translate-x-0")
    $(".newsletter-container").removeClass('xl:w-[35%]')
    $("span").text($("#newsletter_email").val(""))
    // $(".newsletter-success").removeClass("hidden")
    $(".newsletter").removeClass("-translate-x-[120%]")
  })
  $('#newsletter_email').focus(()=>{
    $('#newsletter_email').removeClass('bg-red-100 text-red-400 border-red-400')
    $('.error-message').addClass("invisible")
})
})

