export default function dateConvert(date) {
    let now = new Date().getTime();
    let timeAgo = new Date(now - date);

    let unit = ''
    let value = ''

    if ((now - date) < 0) {
        return "Just now"
    }

    if ((timeAgo.getUTCFullYear() - 1970) > 0) {
        value = timeAgo.getUTCFullYear() - 1970
        unit = 'years';
    } else if (timeAgo.getUTCMonth() > 0) {
        value = timeAgo.getUTCMonth()
        unit = 'months';
    } else if ((timeAgo.getUTCDate() - 1) > 0) {
        value = timeAgo.getUTCDate() - 1;
        unit = 'days';
    } else if (timeAgo.getUTCHours() > 0) {
        value = timeAgo.getUTCHours();
        unit = 'hours';
    } else if (timeAgo.getUTCMinutes() > 0) {
        value = timeAgo.getUTCMinutes();
        unit = 'minutes';
    } else if (timeAgo.getUTCSeconds() > 0) {
        value = timeAgo.getUTCSeconds();
        unit = 'seconds';
    }

    if (value === 1) {
        unit = unit.substr(0, unit.length - 1)
    }

    return (value + ' ' + unit + ' ago')
}
