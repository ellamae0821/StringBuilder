//jshint esversion: 6

class StringBuilder {
    constructor(string) {
    this.string = string;
  }

  toString() {
    return this.toString;
  }

  reverse() {
    return this.string.split("").reverse().join("");
  }

  toUpperCase(){
    return this.string[0].toUpperCase()+this.string[1]+this.string[2];
  }




}


module.exports=StringBuilder;
