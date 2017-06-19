var url = "http://api.forismatic.com/api/1.0/";
var quoteTxt = "";
var quoteAuthor = "";
$(document).ready(function() {
    $("#getQuote").on("click", function(){
        // Only change code below this line.
        $.getJSON(
            "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
            function (data) {
                data = JSON.parse(data);
                quoteAuthor = data.quoteAuthor;
                quoteTxt = data.quoteText;

                $(".quote").html(JSON.stringify(data}
        )
        // Only change code above this line.
    });

});
