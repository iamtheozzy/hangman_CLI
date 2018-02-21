

var Letter = function(char) {
    this.char = char; //underlying character
    this.beenGuessed = false;
    this.display = function() {
      if (this.beenGuessed === true) {
        return this.char;
      } else {
        return ("_");
      }
    };
    this.compare = function(guessed) {
      if (guessed === this.char) {
        this.beenGuessed = true;
        return;
      }
    };
};


module.exports = Letter;
