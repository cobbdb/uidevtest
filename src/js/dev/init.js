$(function () {
    // Load in feed.
    // Wait page load until feed comes in.
    // In production, a busy notifier would show instead.
    $.ajax({
        url: "../js/uidevtest-data.js",
        dataType: "json",
        type: "GET",
        success: function (res) {
            // Check request for query.
            var query = Util.parseQuery(window.location.search);
            if (query.story) {
                var id = Util.parseStoryId(query.story);
                var view = new EJS({
                    url: "views/story.ejs"
                });
                var markup = view.render(res.objects[id]);
                $("#page").html(markup);
            } else {
                console.log("list view");
            }
        },
        error: function (xhr) {
            console.error(xhr.status + " : " + xhr.statusText);
        }
    });
});