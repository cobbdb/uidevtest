$(function () {
    // Load in feed.
    // Wait page load until feed comes in.
    // In production, a busy notifier would show instead.
    $.ajax({
        url: "../js/uidevtest-data.js",
        dataType: "json",
        type: "GET",
        success: function (res) {
            console.log(res);
            // Check request for query.
            var query = Util.parseQuery(window.location.search);
            if (query.story) {
                console.log("story view");
            } else {
                console.log("list view");
            }
        },
        error: function (xhr) {
            console.error(xhr.status + " : " + xhr.statusText);
        }
    });
});