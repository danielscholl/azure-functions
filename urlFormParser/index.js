module.exports = function (context, req) {
  context.log('UrlFormParser processed a request.');
  context.log(req);

  if(req.body && req.body.form) {
    const parsedForm = parseQuery(req.body.form);
    context.log(parsedForm);
  
    context.res = {
      body: parsedForm
    };

  } else {
    context.res = {
      status: 400,
      body: "Please pass a name on the query string or in the request body"
    };
  }
  

  context.done();
};

function parseQuery(input) {
  const arr = input.replace('+', ' ').substr(0).split('&');

  let output = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i].split('=');
    output[decodeURIComponent(item[0])] = decodeURIComponent(item[1] || '');
  }
  return output;
}