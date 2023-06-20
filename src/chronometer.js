class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        return printTimeCallback();
      } else {
        return 0;
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let entireMinute = Math.floor(this.currentTime / 60);
    return entireMinute;
  }

  getSeconds() {
    // ... your code goes here
    let totalSeconds = this.currentTime % 60;
    return totalSeconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueString = String(value);
    if (valueString.length <= 1) {
      valueString = "0" + valueString;
      return valueString;
    } else {
      return valueString;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    let stringEntireMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let stringTotalSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${stringEntireMinutes}:${stringTotalSeconds}`;
  }
}
