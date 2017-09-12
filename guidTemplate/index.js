// Copyright(c) 2017, cloudcodeit.com
const uuidv4 = require('uuid/v4');

module.exports = (context, req) => {
    let count = 1;
    if (req.query.count) {
      count = req.query.count
    }
    const template = CreateTemplate(count);
  
    context.log(template);
    context.res = {
      body: template,
      headers: {
          'Content-Type': 'application/json'
      }
    }
    context.done();
  };

function CreateTemplate(count) {
    let template = {
      $schema: "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
      contentVersion: "1.0.0.0",
      parameters: {},
      variables: {},
      resources: [],
      outputs: {}
    };
  
    for (i = 0; i < count; i++) {
      template.outputs[`guid${i}`] = {
        type: "string",
        value: uuidv4()
      }
    }
  
    return template
  }