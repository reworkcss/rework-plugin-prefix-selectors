var rework = require('rework')
  ,  mixin = require('../')
  , fs = require('fs')
  , assert = require('assert')
  , read = fs.readFileSync;

function fixture (name) {
  return read('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('.prefixSelectors(str)', function(){
  it('should prefix selectors', function(){
    rework(fixture('prefix-selectors'))
      .use(rework.prefixSelectors('#dialog'))
      .toString()
      .should.equal(fixture('prefix-selectors.out'));
  })
  it('should use the prefix as the :root pseudo-class', function(){
    rework(fixture('prefix-selectors-root'))
      .use(rework.prefixSelectors('#dialog'))
      .toString()
      .should.equal(fixture('prefix-selectors-root.out'));
  })
})
