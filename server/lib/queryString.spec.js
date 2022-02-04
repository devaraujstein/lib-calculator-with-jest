const { makeQueryString, makeObjectWithQueryString } = require('./queryString');

describe('Object to query string', () => {

  it('should create a valid query string when an object is provided', () => {

    const user = {
      name: 'André',
      profession: 'developer'
    };

    expect(makeQueryString(user)).toBe('name=André&profession=developer');

  });

  it('should create a valid query string even when an array is passed as value', () => {

    const user = {
      name: 'André',
      abilities: ['JS', 'TDD']
    };

    expect(makeQueryString(user)).toBe('name=André&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {

    const user = {
      name: 'André',
      abilities: {
        first: 'JS',
        second: 'TDD'
      }
    };

    expect(() => {
      makeQueryString(user)
    }).toThrowError();

  });

});

describe('Query string to object', () => {

  it('should convert a query string to object', () => {
    const queryString = `name=André&profession=developer`;

    expect(makeObjectWithQueryString(queryString))
      .toEqual({
        name: 'André',
        profession: 'developer'
      });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const queryString = `name=André`;

    expect(makeObjectWithQueryString(queryString))
      .toEqual({
        name: 'André'
      });
  });

  it('should conver a query string to an object taking care of comma separated values', () => {

    const queryString = `name=André&abilities=JS,TDD`;

    expect(makeObjectWithQueryString(queryString))
      .toEqual({
        name: 'André',
        abilities: ['JS', 'TDD']
      });

  });

});