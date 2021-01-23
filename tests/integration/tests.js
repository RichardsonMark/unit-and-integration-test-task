const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  // 1 add 4 equals 5
  it('should be able to add two numbers together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  // 7 subtract 4 equals 3
  it('should be able to subract a number from another', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  // 3 multiplied by 5 equals 15
  it('should be able to multiply a number by another', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('15')
  })

    // 21 divided by 7 equals 3
    it('should be able to divide a number by another', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      element(by.css('#number1')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number7')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('3')
    })

    // chained together multiple operations 
    it('should be able to chain together multiple operations', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number4')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number7')).click();  
      element(by.css('#operator_divide')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('14')
    })

});
