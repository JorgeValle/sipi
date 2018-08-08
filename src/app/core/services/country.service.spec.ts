// Angular core
import { TestBed, async, inject }                                  from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend }                                             from '@angular/http/testing';

// Sipi custom
import { Country }        from '../countries/country';
import { CountryService } from '../services/country.service';

describe('The country service', () => {
  
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        CountryService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('getCountries()', () => {

    it('should return an Observable<Array<Country>>',
        inject([CountryService, XHRBackend], (countryService, mockBackend) => {

        const mockResponse = {
          data: [
            { id: 0, name: 'Cuba' },
            { id: 1, name: 'Honduras' },
            { id: 2, name: 'Panama' }
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        countryService.getCountries().subscribe((countries) => {
          expect(countries.length).toBe(3);
          expect(countries[0].name).toEqual('Cuba');
        });

    }));
  });
});