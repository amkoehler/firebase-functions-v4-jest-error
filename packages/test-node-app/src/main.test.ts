import { logHelloError } from './main';

describe('main', () => {
  it('should work', () => {
    logHelloError();
    expect(true).toBe(true);
  });
});
