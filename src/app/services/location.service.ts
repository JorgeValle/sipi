// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class LocationService {

  constructor(
    private http: Http
  ) {}

  /**
   * Returns user ip
   */
  getIp() {

  }

  /**
   * Returns user location
   */
  getLocation() {

    let belizeIp = '190.197.0.0',
        guatemalaIp = '186.151.207.232',
        elSalvadorIp = '66.249.192.0',
        hondurasIp = '57.75.160.0',
        nicaraguaIp = '186.76.0.0',
        costaRicaIp = '144.22.0.0',
        panamaIp = '',
        prIp = '23.18.0.0',
        drIp = '66.98.0.40',
        cubaIp = '152.206.0.0';

    return this.http.get(`http://freegeoip.net/json/${costaRicaIp}`)
    .map((res:Response) => res.json())

  }

}