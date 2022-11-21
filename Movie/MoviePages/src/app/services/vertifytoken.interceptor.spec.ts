import { TestBed } from '@angular/core/testing';

import { VertifytokenInterceptor } from './vertifytoken.interceptor';

describe('VertifytokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      VertifytokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: VertifytokenInterceptor = TestBed.inject(VertifytokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
