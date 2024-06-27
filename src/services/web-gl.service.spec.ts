import { TestBed } from '@angular/core/testing';

import { WebGlService } from './web-gl.service';

describe('WebGlService', () => {
    let service: WebGlService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WebGlService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
