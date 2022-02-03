const { makeQueryString } = require('./queryString');

describe('Object to query string', () => {

  it('should create a valid query string when an object is provided', () => {

    const user = {
      name: 'André',
      profession: 'developer'
    };

    expect(makeQueryString(user)).toBe('name=André&profession=developer');

  });

});