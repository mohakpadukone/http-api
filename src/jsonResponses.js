// function to respond with a json object
const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const respond = (request, response, status, content, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(content);
  response.end();
};

const success = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'This is a sucessful response',
    id: 'Success',
  };
    
  if(acceptedTypes[0] === 'text/xml'){
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>This is a sucessful response</message>`;
      responseXML = `${responseXML} <id>Success</id>`;
      responseXML = `${responseXML} </response>`;
      
      return respond(request, response, 200, responseXML, 'text/xml')
  }
  return respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response, acceptedTypes, params) => {
  const responseJSON = {
    message: 'This query has required parameter ',
    id: 'Bad Request',
  };
    
  if(params.valid !== 'true'){
      if(acceptedTypes[0] === 'text/xml'){
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>Missing valid query parameter set to true</message>`;
      responseXML = `${responseXML} <id>Bad Request</id>`;
      responseXML = `${responseXML} </response>`;
      
      return respond(request, response, 400, responseXML, 'text/xml')
  }
  return respondJSON(request, response, 400, responseJSON);
  }
    
  
    
  if(acceptedTypes[0] === 'text/xml'){
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>This request has the parameters</message>`;
      responseXML = `${responseXML} <id>Bad Request</id>`;
      responseXML = `${responseXML} </response>`;
      
      return respond(request, response, 200, responseXML, 'text/xml')
  }
  return respondJSON(request, response, 200, responseJSON);
};

const unauthorized = (request, response, acceptedTypes, params) => {
  const responseJSON = {
    message: 'You have successfuly view content',
    id: 'Unauthorized',
  };
    
  if(params.loggedIn !== 'yes'){
      if(acceptedTypes[0] === 'text/xml'){
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>Missing loggedIn query parameter set to yes</message>`;
      responseXML = `${responseXML} <id>Unauthorized</id>`;
      responseXML = `${responseXML} </response>`;
      
      return respond(request, response, 401, responseXML, 'text/xml')
  }
  return respondJSON(request, response, 401, responseJSON);
  }
    
  
    
  if(acceptedTypes[0] === 'text/xml'){
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>You have sucessfully viwed content</message>`;
      responseXML = `${responseXML} <id>Unauthorized</id>`;
      responseXML = `${responseXML} </response>`;
      
      return respond(request, response, 200, responseXML, 'text/xml')
  }
  return respondJSON(request, response, 200, responseJSON);
};

const forbidden = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'You do not have access to this content',
    id: 'Forbidden',
  };
    
  if(acceptedTypes[0] === 'text/xml'){
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>You do not have access to this content</message>`;
      responseXML = `${responseXML} <id>Forbidden</id>`;
      responseXML = `${responseXML} </response>`;
      
      return respond(request, response, 403, responseXML, 'text/xml')
  }
  return respondJSON(request, response, 403, responseJSON);
};

const internal = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'Something wrong with the server',
    id: 'Internal Server Error',
  };
    
  if(acceptedTypes[0] === 'text/xml'){
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>Something wrong with the server</message>`;
      responseXML = `${responseXML} <id>Internal Server Error</id>`;
      responseXML = `${responseXML} </response>`;
      
      return respond(request, response, 500, responseXML, 'text/xml')
  }
  return respondJSON(request, response, 500, responseJSON);
};

const notImplemented = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'A get request for this page has not been implemented',
    id: 'Not Implemented',
  };
  if(acceptedTypes[0] === 'text/xml'){
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>A get request for this page has not been implemented</message>`;
      responseXML = `${responseXML} <id>Not Implemented</id>`;
      responseXML = `${responseXML} </response>`;
      
      return respond(request, response, 501, responseXML, 'text/xml')
  }
  return respondJSON(request, response, 501, responseJSON);
};

const notFound = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'The page you were looking for was not found',
    id: 'notFound',
  };
    
  if(acceptedTypes[0] === 'text/xml'){
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>The page you were looking for was not found</message>`;
      responseXML = `${responseXML} <id>notFound</id>`;
      responseXML = `${responseXML} </response>`;
      
      return respond(request, response, 404, responseXML, 'text/xml')
  }
  return respondJSON(request, response, 404, responseJSON);
};


// public exports
module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  notFound,
};
