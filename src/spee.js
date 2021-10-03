class Spee {
  constructor() {
    this.sr = new webkitSpeechRecognition();
    this.sr.continous = true;
    this.sr.onresult = (r)=>{this.ontext(r.results[r.results.length - 1][0].transcript)};
    this.ontext = null;
  }
  start() {
    this.sr.start()
  }
}
    
//t.onresult = (r)=>{console.log(r.results[r.results.length - 1][0].transcript)}
