class Spee {
  constructor() {
    this.sr = new webkitSpeechRecognition();
    this.sr.continuous = true;
    this.sr.onresult = (r)=>{this.ontext(r.results[r.results.length - 1][0].transcript)};
    this.ontext = null;
  }
  start() {
    this.sr.start()
  }
  
  stop() {
    this.sr.stop()
  }
}
    
