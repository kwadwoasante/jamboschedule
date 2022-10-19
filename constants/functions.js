const currentDate = new Date();
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

const getTimeFormat = (dt) => {
    // return time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    let time = dt.getHours();
    let time12 = hours12(time);
    let setter = getTimeOfDay(time);
    return `${time12} ${setter}`
}

const getTimeOfDay = (time) => {
    let setter;
    if(time < 12){
        setter = "AM"
    } else {
        setter = "PM"
    }

    return setter;
}

const setTimer = (h,m,s) => {
    currentDate.setHours(h,m,s);
    return currentDate.toISOString();
}

const returnDay = (n) => {
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    return days[n];
}

const hours12 = (date) => { 
    return (date + 24) % 12 || 12; 
}

const returnHumanDate = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString(undefined, options);
}

module.exports =  {
    getTimeFormat,
    setTimer,
    returnDay,
    returnHumanDate
}