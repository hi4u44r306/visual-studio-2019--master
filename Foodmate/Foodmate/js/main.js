﻿(function ($) {
    "use strict";

    /*==================================================================
      [ Focus Contact2 ]*/
    $(".input100").each(function () {
        $(this).on("blur", function () {
            if ($(this).val().trim() != "") {
                $(this).addClass("has-val");
            } else {
                $(this).removeClass("has-val");
            }
        });
    });

    /*==================================================================
      [ Validate ]*/
    var input = $(".validate-input .input100");

    $(".validate-form").on("submit", function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });

    $(".validate-form .input100").each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
            if (
                $(input)
                    .val()
                    .trim()
                    .match(
                        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
                    ) == null
            ) {
                return false;
            }
        } else {
            if ($(input).val().trim() == "") {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass("alert-validate");
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass("alert-validate");
    }
})(jQuery);

/*--------------------login function-----------------------------------*/
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("login div").style.display = "block";
         alert("APPLE")
   
        // User is signed in.
    } else {
        document.getElementById("login div").style.display = "none";
        // No user is signed in.
      
    }
});

以下是檢查登入的函數
//Login//
function login() {
   
    var InputUse = document.getElementById("UserName").value;
    var InputPwd = document.getElementById("UserPwd").value;
  
    firebase
        .auth()
        .signInWithEmailAndPassword(InputUse, InputPwd)
        .then(function (user) {
            window.location.href = "Menu.aspx";
           
            
        }).catch(function (error) {
            alert(error.message)
        });
}

//signup//
const auth = firebase.auth();

function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");

}
