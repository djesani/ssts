const getCountdownTimer = (endDate) => {
    const total = Date.parse(endDate) - Date.parse(new Date());
    const timer = {
        total,
        seconds: Math.floor( (total/1000) % 60 ),
        minutes: Math.floor( (total/1000/60) % 60 ),
        hours: Math.floor( (total/(1000*60*60)) % 24 ),
        days: Math.floor( total/(1000*60*60*24) )
    };
    console.log("TIMER:", timer);
    return timer;
};

module.exports = {
    getCountdownTimer
};