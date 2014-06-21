var rework = require('rework')
  , prefixSelectors = require('../')
  , fs = require('fs')
  , assert = require('assert')
  , read = fs.readFileSync;

function fixture (name) {
  return read('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('.prefixSelectors(str)', function(){
  it('should prefix selectors', function(){
    rework(fixture('prefix-selectors'))
      .use(prefixSelectors('#dialog'))
      .toString()
      .should.equal(fixture('prefix-selectors.out'));
  })
  it('should use the prefix as the :root pseudo-class', function(){
    rework(fixture('prefix-selectors-root'))
      .use(prefixSelectors('#dialog'))
      .toString()
      .should.equal(fixture('prefix-selectors-root.out'));
  })
})
