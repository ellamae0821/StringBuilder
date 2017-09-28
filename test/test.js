//jshint esversion: 6

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const StringBuilder = require('../string-builder');

describe('test', function (){

  var sb;
  beforeEach (function () {
    sb = new StringBuilder('foo');
  });

  it('expect it to be a function',function (){
    expect(StringBuilder).to.be.a('function');
  });

  it('expect it to be a string', function (){
    expect('foo').to.be.a('string');
  });

  it('should reverse string', function (){
  expect(reverse("hello").to.equal("olleh"));
  });

  it.skip('should capitaized first letter of a word', function (){
  expect(reverse("hello world").to.equal("Hello World"));
  });

  it.skip('should put the string in an array', function (){
    expect([1, 2, 3]).to.be.an('array').that.includes(2);
  });

  it.skip('should append ', function (){
  expect(reverse("hello world").to.equal("Hello World"));
  });

  
});

