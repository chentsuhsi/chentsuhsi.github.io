var url = "http://api.forismatic.com/api/1.0/";
var quoteTxt = "";
var quoteAuthor = "";
$(document).ready(function() {
    $("#getQuote").on("click", function(){
        // Only change code below this line.
        $.getJSON(
            "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
            function (data) {
                var html = "";
                if (typeof r === 'string') { data = JSON.parse(data) };
                quoteAuthor = data.quoteAuthor;
                quoteTxt = data.quoteText;

                html += '<div class="quote-txt">' +
                        '    <span class="fa fa-quote-left " aria-hidden="true"></span>'+
                         quoteTxt +
                         '<span class="fa fa-quote-right " aria-hidden="true"></span>'+
                         '</div>';
                html += '<div class="quote-author">' + quoteAuthor + '</div>';

                $(".quote").html(html);
            }
        )
        // Only change code above this line.
    });

});
