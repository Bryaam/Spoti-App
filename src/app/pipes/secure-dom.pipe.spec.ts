import { SecureDOMPipe } from './secure-dom.pipe';

describe('SecureDOMPipe', () => {
  it('create an instance', () => {
    const pipe = new SecureDOMPipe();
    expect(pipe).toBeTruthy();
  });
});
