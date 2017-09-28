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
  expect(sb.reverse()).to.equal("oof");
  });

  it('should capitaized first letter of a word', function (){
  expect(sb.toUpperCase()).to.equal("Foo");
  });

  it('it should add the string to array', function (){
  expect(sb.toArray()).to.deep.equal(["foo"]);
  });

  it('should append ', function (){
  expect(sb.append()).to.equal("foo bar");
  });

  
});

