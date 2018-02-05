import {RxHttpRequest} from 'rx-http-request';

export class Weather {
  byGeo(lat,lon) {
    const uri = `${process.env.WEATHER_API_ROOT}/api/weather/v1/geocode/${lat}/${lon}/observations.json`;
    return RxHttpRequest.get(uri, {
      qs: {
        units: 'e',
        language: 'en-US'
      },
      json: true
    })
    .map(r => r.body);
  }
}

export default new Weather();