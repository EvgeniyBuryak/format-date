function formatDate(inDate) {
    let diff = new Date() - inDate; // diffrent milliseconds
    
    if (diff < 1000)
        return "right now";
    
    let second = Math.floor(diff / 1000); // transfer to seconds

    if (second < 60)
        return `${second} sec. ago`;

    let minutes = second / 60; // transfer to minutes

    if (minutes < 60)
        return `${minutes} min. ago`;

    return inDate
        .toString()
        .split(' ')
        .slice(1, 5)
        .join(' ');
}

alert(formatDate(new Date(new Date - 1))); // right now

alert(formatDate(new Date(new Date - 53 * 1000))); // "seconds ago"

alert(formatDate(new Date(new Date - 27 * 60 * 1000))); // "minutes ago"

alert(formatDate(new Date(new Date - 86400 * 1000))); // date 31.12.2016, 20:00