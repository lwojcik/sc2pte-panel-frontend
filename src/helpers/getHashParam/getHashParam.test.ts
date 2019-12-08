import getHashParam from './getHashParam';

it('returns correct hash parameter', () => {
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://testurl:8080/?testParam=testValue',
    },
  });

  expect(getHashParam('testParam')).toBe('testValue');
});

it('returns empty string for non-existent or empty parameter', () => {
  global.window = Object.create(window);
  global.window.location.href = 'http://test/';
  expect(getHashParam('nonexistentTestParam')).toBe('');
});