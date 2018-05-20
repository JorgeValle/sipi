export class Place {
  id: number;
  content: {
    name: string;
  };
  address: {
    number: string;
    street: string;
    city: string;
    country: string;
  };
  category: {
    name: string;
    subcats: [string]
  };
  schedule: {
    monday: {
      open: number;
      close: number;
    },
    tuesday: {
      open: number;
      close: number;
    },
    wednesday: {
      open: number;
      close: number;
    },
    thursday: {
      open: number;
      close: number;
    }
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  imageFileName: string;
  comments: number;
  change: {
    upward: {
      movement: number;
    },
    downward: {
      movement: number;
    }
  };
  status: string;
  phone: number;
  website: string;
  rating: number;
  img: string;
  price: string;
}
