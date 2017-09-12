const test = require('tape');
const serverFunction = require('../guidTemplate/index.js');

const Context = function (cb) {
  let self = this;
  self.log = message => { };
  self.done = () => cb(self.res);
  self.res = {};
  return self;
}

test('Default Template validates as a template', assert => {
  const params = {};

  let context = new Context(res => {
    assert.true(typeof (res.body) == 'object', 'Should be a json object');
    assert.equal(res.body.$schema, 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#', 'Should define the schema');
    assert.equal(res.body.contentVersion, '1.0.0.0', 'Has correcrt version');
    assert.true(typeof (res.body.parameters) == 'object', 'Has parameter object');
    assert.true(typeof (res.body.variables) == 'object', 'Has variable object');
    assert.equal(res.body.resources.length, 0, 'Resources are empty');
    assert.end();
  });

  serverFunction(context, { query: params });
});

test('Default Template has one output guid', assert => {
  const params = {};

  let context = new Context(res => {
    assert.true(typeof (res.body.outputs) == 'object', 'Has outputs object');
    assert.true(res.body.outputs.guid0.value !== undefined, 'Contains a valid guid0');
    assert.true(res.body.outputs.guid1 === undefined, 'Does not contain an additional guid');
    assert.end();
  });

  serverFunction(context, { query: params });
});

test('Count Parameters determine output guids', assert => {
  const params = {
    count: 2
  };

  let context = new Context(res => {
    assert.true(typeof (res.body.outputs) == 'object', 'Has outputs object');
    assert.true(res.body.outputs.guid0.value !== undefined, 'Contains a valid guid0');
    assert.true(res.body.outputs.guid1.value !== undefined, 'Contains a valid guid0');
    assert.end();
  });

  serverFunction(context, { query: params });
});
