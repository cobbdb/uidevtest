var Util = {
    /**
     * @param {String} query Typically the result of window.location.search.
     */
    parseQuery: function (query) {
        // Decode the uri and remove the leading '?'.
        query = decodeURIComponent(query);
        query = query.slice(1);
        
        var result = {};
        var params = query.split("&");
        for (var i in params) {
            var pair = params[i].split("=");
            result[pair.shift()] = pair.join("=");
        }
        return result;
    },
    splitStory: function (story) {
        var len = story.length;
        var offset = story.slice(len / 2).search(/<p>/i);
        var half = len / 2 + offset;
        
        return [
            story.slice(0, half),
            story.slice(half)
        ];
    }
};