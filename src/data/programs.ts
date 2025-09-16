import { Program } from '../types';

export const programs: Program[] = [
  {
    id: '1',
    title: 'High-Intensity Interval Training',
    description: 'Burn calories and build endurance with our dynamic HIIT workouts designed for maximum results.',
    duration: '45 mins',
    difficulty: 'Intermediate',
    price: 89,
    image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'HIIT',
    benefits: ['Burns calories', 'Improves cardiovascular health', 'Increases metabolism', 'Builds endurance'],
    equipment: ['Dumbbells', 'Kettlebells', 'Resistance bands', 'Exercise mat']
  },
  {
    id: '2',
    title: 'Strength & Conditioning',
    description: 'Build lean muscle and increase strength with our comprehensive strength training program.',
    duration: '60 mins',
    difficulty: 'Advanced',
    price: 120,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Strength',
    benefits: ['Builds muscle mass', 'Increases bone density', 'Improves posture', 'Boosts metabolism'],
    equipment: ['Barbells', 'Dumbbells', 'Cable machine', 'Bench press']
  },
  {
    id: '3',
    title: 'Mindful Yoga Flow',
    description: 'Find balance and flexibility through our peaceful yoga sessions suitable for all levels.',
    duration: '75 mins',
    difficulty: 'Beginner',
    price: 65,
    image: 'https://images.pexels.com/photos/9004264/pexels-photo-9004264.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Yoga',
    benefits: ['Improves flexibility', 'Reduces stress', 'Enhances balance', 'Promotes mindfulness'],
    equipment: ['Yoga mat', 'Yoga blocks', 'Straps', 'Bolster']
  },
  {
    id: '4',
    title: 'Cardio Blast',
    description: 'High-energy cardio workout that will get your heart pumping and calories burning.',
    duration: '40 mins',
    difficulty: 'Intermediate',
    price: 75,
    image: 'https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cardio',
    benefits: ['Improves heart health', 'Burns calories', 'Increases stamina', 'Boosts mood'],
    equipment: ['Treadmill', 'Stationary bike', 'Jump rope', 'Step platform']
  },
  {
    id: '5',
    title: 'Flexibility & Mobility',
    description: 'Improve your range of motion and prevent injury with targeted stretching and mobility work.',
    duration: '50 mins',
    difficulty: 'Beginner',
    price: 55,
    image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Flexibility',
    benefits: ['Increases flexibility', 'Reduces injury risk', 'Improves posture', 'Relieves tension'],
    equipment: ['Foam roller', 'Resistance bands', 'Yoga mat', 'Stretching straps']
  },
  {
    id: '6',
    title: 'Functional Fitness',
    description: 'Train movements that translate to real-life activities and improve overall functionality.',
    duration: '55 mins',
    difficulty: 'Intermediate',
    price: 95,
    image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Strength',
    benefits: ['Improves daily movements', 'Builds core strength', 'Enhances stability', 'Prevents injury'],
    equipment: ['TRX suspension', 'Medicine balls', 'Battle ropes', 'Balance boards']
  }
];