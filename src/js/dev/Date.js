/**
 * Format a date object into a readable string.
 * @param {Date} date
 * @returns {String}
 */
Date.prototype.toString = function () {
    var hour = this.getHours() % 13;
    hour = (hour == 0) ? 12 : hour;
    var min = this.getMinutes().toString();
    min = (min.length == 1) ? "0" + min : min;
    var code = (this.getHours() < 12) ? " a.m. " : " p.m. ";
    
    return (
        hour + ":" +
        min + code +
        Date.DAYS[this.getDay()] + ", " +
        Date.MONTHS[this.getMonth()] + " " +
        this.getDate() + ", " +
        this.getFullYear()
    );
};

Date.MONTHS = [
    "Jan.", "Feb.", "Mar.", "Apr.", "May",
    "June", "July", "Aug.", "Sept.", "Oct.",
    "Nov.", "Dec."
];

Date.DAYS = [
    "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday"
];