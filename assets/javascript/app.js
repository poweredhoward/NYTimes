$(document).ready(function() {

   function convertDate()

    $("#searchButton").on("click", function(){
        var query = $("#query").val();
        var quantity = $("#quantity").val();
        var begin = $("#start").val();
        var end = $("#end").val();

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "ec9386b2270d431591c608dd2e1d96e9",
            'q': query,
            'begin_date': begin,
            'end_date': end,
            'page': 0
        });

        $.ajax({
            url: url,
            method: 'GET',
        }).then(function(result) {
            var useful = result.response.docs;
            useful.forEach( function (doc){
                console.log(useful[0].headline.main, useful[0].web_url, useful[0].byline.original, useful[0].pub_date);
                var resultdiv = $("<div>");

            });
        });

    });

    $("#clearButton").on("click", function (){

    });


});
