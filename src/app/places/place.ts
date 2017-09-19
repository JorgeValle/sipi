export class Place {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  schedule: {
    monday: {
      open: number;
      close: number;
    }
  };
  lat: number;
  lng: number;
  imageFileName: string;
}
