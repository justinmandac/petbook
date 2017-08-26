const assert = require('chai').assert;
import Response from './response.model';

describe('response.model',() => {
  it('should be ok', () => {
    const sampleResponse = {
      error: 0,
      message: 'hello',
      output: null,
    };
    const noParamsResponse = new Response();
    
    assert.isOk(noParamsResponse);
    assert.isOk(new Response(sampleResponse));
  });

  it('should return the received message & set defaults', () => {
    const sample = {
      err: 1,
      message: 'foo',
      output: { foo: '', bar: 1, baz: 2, },
    };
    const response = new Response(sample);
    const defaultResponse = new Response();

    assert.equal('', defaultResponse.message);
    assert.equal(sample.message, response.message);
  });
});