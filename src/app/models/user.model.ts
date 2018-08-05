/**
 * @todo revise this, make sure it accomodates to model in Antares, and that I'm using the right types
 */
export interface User {
  bio: string;
  contributions: [string];
  consent: boolean;
  creationCity: string;
  creationCountry: string;
  createdDate: Date;
  currentCity: string;
  currentCountry: string;
  email: string;
  favoriteCategories: [string];
  favoritePlaces: [string];
  firstName: string;
  notifications: {
    unseen: number,
    total: number
  }; 
  lastName: string;
  id: number;
  imageFileName: string;
  lastUpdate: Date;
  medals: [object];
  privacy: {
    level: string;
  };
  status: string;
  subscription: {
    level: string
  }
  reports: number;
  ownsPlaces: [number];
}

// possible to extend
// class subuser extends User {}