//jshint esversion: 6

class StringBuilder {
    constructor(string) {
    this.string = string;
  }

  toString() {
    return this.toString;
  }

  reverse() {
//    return this.reverse;
//  return reverse(this);
//    var string1 = this.string;

    return this.string.split("").reverse().join("");
  }
}
//StringBuilder.reverse();

module.exports=StringBuilder;
