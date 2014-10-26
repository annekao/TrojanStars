var Stopwatch = function(elem, options) {
  
  var timer       = createTimer(),
      offset,
      clock,
      interval;
  
  // default options
  options = options || {};
  options.delay = options.delay || 1;
 
  // append elements     
  elem.appendChild(timer);
  // initialize
  reset();
  
  // private functions
  function createTimer() {
    return document.createElement("span");
  }
  
  function createButton(action, handler) {
    var a = document.createElement("a");
    a.href = "#" + action;
    a.innerHTML = action;
    a.addEventListener("click", function(event) {
      handler();
      event.preventDefault();
    });
    return a;
  }
  
  function start() {
    if (!interval) {
      offset   = Date.now();
      interval = setInterval(update, options.delay);
    }
  }
  
  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }
  
  function reset() {
    clock = 0;
    render(0);
  }
  
  function update() {
    clock += delta();
    render();
  }
  
  function render() {
    timer.innerHTML = clock/1000; 
  }
  
  function delta() {
    var now = Date.now(),
        d   = now - offset;
    
    offset = now;
    return d;
  }
  
  // public API
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
};


// basic examples
var elems = document.getElementsByClassName("basic");

for (var i=0, len=elems.length; i<len; i++) {
  new Stopwatch(elems[i]);
}

var d = document.getElementById("d-timer");
dTimer = new Stopwatch(d, {delay: 1000});
dTimer.start();


