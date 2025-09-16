import { Trainer } from '../types';

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    specialty: 'HIIT & Strength Training',
    experience: '8 years',
    bio: 'Certified personal trainer specializing in high-intensity workouts and strength building. Passionate about helping clients achieve their fitness goals through challenging yet safe training methods.',
    image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    price: 80,
    certifications: ['NASM-CPT', 'HIIT Certified', 'Nutrition Coach'],
    availability: ['Monday', 'Wednesday', 'Friday', 'Saturday']
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    specialty: 'Strength & Conditioning',
    experience: '12 years',
    bio: 'Former collegiate athlete turned fitness professional. Specializes in strength training, athletic performance, and injury prevention through proper movement patterns.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    price: 90,
    certifications: ['CSCS', 'FMS Level 2', 'Olympic Lifting Certified'],
    availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday']
  },
  {
    id: '3',
    name: 'Emma Chen',
    specialty: 'Yoga & Mindfulness',
    experience: '6 years',
    bio: 'Registered yoga teacher with expertise in vinyasa flow, restorative yoga, and meditation. Focuses on creating a holistic approach to wellness through movement and mindfulness.',
    image: 'https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5.0,
    price: 70,
    certifications: ['RYT-500', 'Meditation Teacher', 'Ayurveda Practitioner'],
    availability: ['Monday', 'Tuesday', 'Thursday', 'Friday']
  },
  {
    id: '4',
    name: 'David Kim',
    specialty: 'Functional Training',
    experience: '10 years',
    bio: 'Movement specialist focused on functional fitness and corrective exercise. Helps clients move better in their daily lives while building strength and preventing injury.',
    image: 'https://images.pexels.com/photos/3912953/pexels-photo-3912953.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    price: 85,
    certifications: ['FMS', 'SFMA', 'TRX Certified'],
    availability: ['Wednesday', 'Friday', 'Saturday', 'Sunday']
  }
];