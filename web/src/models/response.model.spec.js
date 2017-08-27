const assert = require('chai').assert;
import Response from './response.model';

describe('response.model',() => {
  const sample = {
      err: 1,
      message: 'foo',
      output: { foo: '', bar: 1, baz: 2, },
    };

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
    const response = new Response(sample);
    const defaultResponse = new Response();

    assert.equal('', defaultResponse.message);
    assert.equal(sample.message, response.message);
  });

  it('should return a copy of the provided output object', () => {
    const response = new Response(sample);

    assert.deepEqual(response.GetData(), sample);

    // Ensure that output was copied, hence modifications to response.output
    // do not reflect in the source object.
    const output = response.GetData();

    output.foo = 'foo';

    assert.notEqual(output.foo, sample.output.foo);
  });
});