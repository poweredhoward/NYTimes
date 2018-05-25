$(document).ready(function() {


    $("#submit").on("click", function(event){
        event.preventDefault();
        var query = $("#searchInput").val();
        var quantity = $("#recordNum").val();
        var begin = $("#startYear").val();
        var end = $("#endYear").val();


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
            //var counter = 0;
            useful.forEach( function (doc){
                console.log(doc.headline.main, doc.web_url, doc.byline.original, doc.pub_date);
                var attributes = [doc.headline.main, doc.web_url, doc.byline.original, doc.pub_date.split("T")[0]];
                var resultdiv = $("<div>");
                resultdiv.addClass("article");
                
                attributes.forEach( function(attribute){
                    resultdiv.append( $("<p>").text(attribute) );
                });
                
                $("#results").append(resultdiv);
            });
        });

    });

    $("#clear").on("click", function (){
        $("#results").empty();
    });


});
