var expect =require ('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
  it('should generate correct message object', ()=>{

    var from = 'murat';
    var text = 'takaka' ;
    var result = generateMessage(from,text );
    expect(typeof result.createdAt).toBe('number');
    expect(result).toMatchObject({from,text});
  })
});

describe('generateLocationMessage', ()=>{
  it('should generate correct location object', ()=>{
    var from = 'murat';
    var latitude = 5 ;
    var longitude = 6 ;
    var url='https://www.google.com/maps?q=5,6';

      var result = generateLocationMessage(from,latitude,longitude);
  //  expect(typeof result.createdAt).toBe('number');
    expect(result).toMatchObject({url});
  })
});
