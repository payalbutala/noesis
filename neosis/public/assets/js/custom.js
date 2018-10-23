// Function to animate form labels
function titleAnimate() {
    if ($(".form-group.typ-anim").length != 0) {
        // check whether input field has data or not to animate
        $(".form-group.typ-anim").find(".form-control").each(function () {
            if ($(this).val().length != 0) {
                $(this).parents(".form-group.typ-anim").addClass("lbl-anim");
            } else {
                $(this).parents(".form-group.typ-anim").removeClass("lbl-anim");
            }
        });
        // on blur checks input field has data or not to animate
        $(".form-group.typ-anim").find(".form-control").on("blur", function () {
            if ($(this).val().length == 0) {
                $(this).parent().removeClass("lbl-anim");
            } else {
                $(this).parent().addClass("lbl-anim");
            }
        })
    }
}

// Function to find whether the number is prime or not
function primeNumber() {
    var ele;
    // function will execute on button click
    $(".btnPrime").on("click", function (e) {
        ele = $(this);
        e.preventDefault();
        isPrimeNumber();
    });

    // function will execute on input blur
    $("#form_primeNum .form-control").on("blur", function () {
        ele = $(this).parents(".bs-form").find(".btnPrime");
        isPrimeNumber();
    });

    // Checks whether the number is divible by 1 and itslef only. 
    function isPrimeNumber() {
        $(".bs-form").find(".result").text("");
        var val = $(ele).parents(".bs-form").find("input").val();
        //if val is a number 
        if (chkNum(val)) {
            // Enter number is < 0
            if (val < 0) {
                $(ele).parents(".bs-form").find(".result").text("Not a valid input");
            }
            // Enter number is >= 0 and <= 1
            else if (val >= 0 && val <= 1) {
                $(ele).parents(".bs-form").find(".result").text("Neither Prime nor Composite");
            }
            // Enter number is >=2
            else {
                // Enter number is =2
                if (val == 2) {
                    $(ele).parents(".bs-form").find(".result").text("Prime Number");
                }
                // Enter number is >=2 and <= Number
                else {
                    for (var i = 2; i < val; i++) {
                        // if value is divisible by > 2 and < value
                        if (val % i == 0) {
                            $(ele).parents(".bs-form").find(".result").text("Not a Prime Number");
                            return false;
                        }
                    }
                    $(ele).parents(".bs-form").find(".result").text("Prime Number");
                }
            }
        } else {
            $(ele).parents(".bs-form").find(".result").text("Only whole numbers are allowed.");
        }
    }
}

// Function to find whether the number is palindrome or not
function palindrome() {
    var ele;
    $(".btnPd").on("click", function (e) {
        ele = $(this);
        e.preventDefault();
        isPalindrome();
    });

    // function will execute on input blur
    $("#form_palindrome .form-control").on("blur", function () {
        ele = $(this).parents(".bs-form").find(".btnPd");
        isPalindrome();
    });

    // Checks whether the a word or sequence that reads the same backwards as forwards, e.g. madam or nurses run.
    function isPalindrome() {
        $(".bs-form").find(".result").text("");
        var flag = true; // flag used to check whether the condition is satisfying.
        var str = $(ele).parents(".bs-form").find("input").val().replace(/\s/g, '');
        var len = str.length;
        // loop checks whether forward and backward digits is same respectivey.
        for (var i = 1; i <= len; i++) {
            // checks whether 1st and last digit is same not no and so on.
            if (str[i - 1] == str[len - i]) {} else {
                // flag sets to false as the condition is false.
                flag = false;
                break;
            }
        }
        // showing Palindrome result in result box.
        if (flag == true) {
            $(ele).parents(".bs-form").find(".result").text("Palindrome");
        } else {
            $(ele).parents(".bs-form").find(".result").text("Not a Palindrome");
        }
    }

}

// check whether user has entered number or not
function chkNum(e) {
    if (Math.floor(e) == e && $.isNumeric(e)) {
        return true;
    } else {
        return false;
    }
}

// form a fibonacci series
function fibonacci() {
    var ele;
    $(".btnfb").on("click", function (e) {
        ele = $(this);
        e.preventDefault();
        isFibonacci();
    });

    // function will execute on input blur
    $("#form_fibonacci .form-control").on("blur", function () {
        ele = $(this).parents(".bs-form").find(".btnfb");
        isFibonacci();
    });

    // To form a series of fibonacci i.e Fibonacci sequence, is a sequence characterized by the fact that every number after the first two is the sum of the two preceding ones.
    function isFibonacci() {
        $(".bs-form").find(".result").text("");
        $(ele).parents(".bs-form").find(".output").text("");
        var val = parseInt($(ele).parents(".bs-form").find("input").val());

        var fibonacci_series = function (n) {
            try {
                // initiall number are 0, 1
                if (n === 1) {
                    return [0, 1];
                }
                // to form a series
                else {
                    var s = fibonacci_series(n - 1);
                    s.push(s[(s.length - 1)] + s[(s.length - 2)]);
                    return s;
                }
            } catch (e) {
                // if numbers exceeds beyond limit then show an error messgae.
                $(ele).parents(".bs-form").find(".result").text("Memory Stack exceeded.");
            }
        }

        // check enter input is numeric or not.
        if (chkNum(val)) {
            var num = parseInt(val);
            var op = fibonacci_series(num);
            $(ele).parents(".bs-form").find(".output").text(op);
        } else {
            $(ele).parents(".bs-form").find(".result").text("String Not allowed");
        }
    }


}

// on click of main menu trigger respective tab
function menuClick() {
    $(".js-menu-click a").on("click", function () {
        var indx = $(this).parent().index();
        $(".nav-tabs").find("ul > li").eq(indx).find("a").trigger("click");
    })
}

$(document).ready(function () {
    $("a").each(function () {
        if ($(this).attr('href') == '#' || $(this).attr('href') == ' ') {
            $(this).attr('href', 'javascript:void(0)');
        }
    });

    titleAnimate();
    primeNumber();
    palindrome();
    menuClick();
    fibonacci();

});