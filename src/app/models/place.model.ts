export interface Place {
  system:{
    id: number;
  };
  date: {
    created: Date;
    modified: Date;
  };
  content: {
    name: string;
    slug: string;
  };
  address: {
    number: string;
    street: string;
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  category: {
    name: string;
    subcats: [string]
  };
  hours: {
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
    },
    friday: {
      open: number;
      close: number;
    },
    saturday: {
      open: number;
      close: number;
    },
    sunday: {
      open: number;
      close: number;
    }
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
  organizational: {
    isBranch: boolean;
    parent: {
      id: number;
      name: string;
      slug: string;
    };
    isParent: boolean;
  };
  status: string;
  contact: {
    phone: number;
    website: string;
    email: string;
  };
  rating: number;
  img: string;
  price: string;
}
