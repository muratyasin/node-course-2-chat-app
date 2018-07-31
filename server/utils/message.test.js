var expect =require ('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
  it('should generate correct message object', ()=>{

    var from = 'murat';
    var text = 'takaka' ;
    var result = generateMessage(from,text );
    expect(typeof result.createdAt).toBe('number');
    expect(result).toMatchObject({from,text});
  })
});
