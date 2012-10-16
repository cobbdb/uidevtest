$(function () {
    // Load in news feed.
    $.ajax({
        url: "../js/uidevtest-data.js",
        dataType: "json",
        type: "GET",
        success: function (res) {
            // Check request for query and branch.
            var query = Util.parseQuery(window.location.search);
            if (query.story) {
                console.log("story view");
                // Grab id of story from query.
                var id = Util.parseStoryId(query.story);
                
                // Load template and render requested story.
                var view = new EJS({
                    url: "views/story.ejs"
                });
                var markup = view.render(res.objects[id]);
                $("#page").html(markup);
            } else {
                console.log("list view");
                // Load template and render story list.
                var view = new EJS({
                    url: "views/list.ejs"
                });
                var markup = view.render(res);
                $("#page").html(markup);
            }
        },
        error: function (xhr) {
            console.error(xhr.status + " : " + xhr.statusText);
            $("#page").append("The site has failed to load :[ Please refresh the page.");
        },
        beforeSend: function () {
            // Display a load bar for large data feeds.
            $("<img/>", {
                id: "loadBar",
                alt: "Loading",
                src: "../images/loading.gif"
            }).appendTo("#page");
        },
        complete: function () {
            $("#loadBar").remove();
        }
    });
});