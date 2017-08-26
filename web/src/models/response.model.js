 /**
 * @fileoverview Model for wrapping server-sent responses.
*/

/** @enum {number} */
export const ERR_CODES = {
    OK: 0,
    GEN_ERR: 1,
    MALFORMED: 99,
};

/**
 * @param {{ error: number, message: string, output: T }} response JSON retrieved from the server.
 *    error: error codes defined in ERR_CODES enum,
 *    message: server-sent message,
 *    output: output data.
 * @constructor
 * @template {T}
*/
function Response({error, message = '', output = null} = {}) {    
  this.error = error;
  this.message = message;
  this.output = output;
}

/** @type {ERR_CODES} */
Response.prototype.error = 0;

/** @type {string} */
Response.prototype.message = '';

/** @type {T} */
Response.prototype.output = null;

/** @return {string} */
Response.prototype.GetMessage = function() {
    return this.message;
};

/** @return {T} */
Response.prototype.GetData = function() {
    return this.output;
};

function CreateResponseObject(response) {
  try {
    const {error, message, output} = JSON.parse(response);
  

  } catch(e) {
    const malformedResponse = {
      error: ERR_CODES.MALFORMED,
      message: 'Malformed response received.',
      output: response,
    };
    return new Response(malformedResponse);
  }  
}

export default Response;

