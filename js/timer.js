function Timer(dateTo) {
	let self = this; 
	self.dateTo = dateTo;
  self.timer = null;
  self.updateIntervalMs = 1000;
  
  self.updateResultCb = function(result) {
  	console.log(result);
  };
  
  self.stop = function() {
  	clearInterval(self.timer);
  }
  
  self.start = function() {
  	if (self.timer != null) {
    	return;
    }
    
    self.timer = setInterval(function() {
    	let diffMs = self.dateTo - (new Date());
      if (diffMs < 0) {
      	self.stop();
      }
      
      let remaining = new Date(diffMs);
    	self.updateResultCb({
      	years: remaining.getUTCFullYear() - 1970,
        days: remaining.getUTCDate() - 1,
        hours: remaining.getUTCHours(),
        minutes: remaining.getUTCMinutes(),
        seconds: remaining.getUTCSeconds()
      });
    }, self.updateIntervalMs);
  }
}
