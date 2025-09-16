export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  image: string;
  category: 'Strength' | 'Cardio' | 'Flexibility' | 'HIIT' | 'Yoga';
  benefits: string[];
  equipment: string[];
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  rating: number;
  price: number;
  certifications: string[];
  availability: string[];
}

export interface Booking {
  id: string;
  userId: string;
  trainerId?: string;
  programId?: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}