const assert = require('chai').assert;
import Response from './response.model';

describe('response.model',() => {
  it('should be ok', () => {
    const sampleResponse = {
      error: 0,
      message: 'hello',
      output: null,
    };

    assert.isOk(new Response());
    assert.isOk(new Response(sampleResponse));
  });
});