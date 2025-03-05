export interface Room {
  id: string;
  type: 'AC' | 'Non-AC';
  name: string;
  price: number;
  description: string;
  images: string[];
  amenities: string[];
  maxOccupancy: number;
}

export interface SafariTour {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  images: string[];
  timing: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  roomType: 'AC' | 'Non-AC';
}