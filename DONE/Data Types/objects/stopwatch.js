// constructor function for a stop watch
// has private variables
// duration / start / stop / reset

function Stopwatch(){
    let startTime, endTime, running, duration = 0;
    this.start = function(){
        if (running)
        throw new Error('Stopwatch is already running');
        running = true;
        startTime = new Date();
    }
    this.stop = function(){
        if (!running)
        throw new Error('Stopwatch is not running')

        running = false
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
    }
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function(){return duration;}
    });
}

const sw = new Stopwatch()


// move all functions to prototype
function Stopwatch2(){
    let startTime, endTime, running, duration = 0;


    Object.defineProperty(this, 'duration', {
        get: function(){return duration;},
        set: function(value){ duration = value;}
    });

    Object.defineProperty(this, 'startTime', {
        get: function(){return startTime;}
    });

    Object.defineProperty(this, 'endTime', {
        get: function(){return endTime;}
    });

    Object.defineProperty(this, 'running', {
        get: function(){return running;}
    });
}


Stopwatch.prototype.start = function(){
    if (this.running)
    throw new Error('Stopwatch is already running');
    this.running = true;
    this.startTime = new Date();
}
Stopwatch.prototype.stop = function(){
    if (!this.running)
    throw new Error('Stopwatch is not running')

    this.running = false
    this.endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        this.duration += seconds;
}
Stopwatch.prototype.reset = function(){
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}

const sw2 = new Stopwatch()