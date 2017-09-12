const test = require('tape');
const serverFunction = require('../urlFormParser/index.js');

const Context = function (cb) {
  let self = this;
  self.log = message => { };
  self.done = () => cb(self.res);
  self.res = {};
  return self;
}

test('urlFormParser', assert => {
  const data = "hello=world";

  let context = new Context(res => {
    const message = 'should parse a single parameter';

    const actual = res.body;
    const expected = { hello: "world" };

    assert.same(actual, expected, message);
    assert.end();
  });

  serverFunction(context, { body: {form: data} });
});

test('urlFormParser', assert => {
    const data = "hello=world&foo=bar";
  
    let context = new Context(res => {
      const message = 'should parse multiple parameters';
  
      const actual = res.body;
      const expected = { hello: "world", foo: "bar" };
  
      assert.same(actual, expected, message);
      assert.end();
    });
  
    serverFunction(context, { body: {form: data} });
  });

