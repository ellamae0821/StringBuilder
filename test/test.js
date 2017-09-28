const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const StringBuilder = require('.../string-builder');

describe('reverse', function (){

  it('should reverse string', function (){
    expect(reverse("hello").to.equal("olleh"));
  });

});

describe.skip('capitaize', function (){
  it('should capitaized first letter of a word', function (){
  expect(reverse("hello world").to.equal("Hello World"));
  });
});


describe.skip('toArray', function (){
  var array;
  it('should put the string in an array', function (){
  toArray(array, hello);
  expect(array).to.deep.equal("[hello]");
  });
});

describe.skip('append', function (){
  it('should append ', function (){
  expect(reverse("hello world").to.equal("Hello World"));
  });
});

describe.skip('toString', function (){
  it('should capitaized first letter of a word', function (){
  expect(reverse("hello world").to.equal("Hello World"));
  });
});


