export interface WorkshopSchedule {
  date: string;
  time: string;
  available: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  detailedDescription: string;
  image: string;
  gallery: string[];
  schedules: WorkshopSchedule[];
  duration: string;
  maxParticipants: number;
  currentParticipants: number;
  price: number;
  requirements: string[];
  location: string;
  faq: FAQ[];
  reviews: Review[];
  active: boolean;
}

export interface Reservation {
  id: string;
  type: "workshop" | "space" | "consultation";
  workshopId?: string;
  workshopTitle?: string;
  name: string;
  phone: string;
  email: string;
  participants: number;
  message: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
  // Consultation fields
  company?: string;
  purpose?: string;
  referenceUrl?: string;
  budget?: string;
}

export interface SpaceSlot {
  date: string;
  time: string;
  available: boolean;
}

export type ReservationType = "workshop" | "space" | "consultation";
