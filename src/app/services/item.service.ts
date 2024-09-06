// src/app/item.service.ts
import { Injectable } from '@angular/core';
import { Wod } from '../interfaces/wod';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private orders = [
    { id: 1, name: 'Order 1', date: '2024-06-28' },
    { id: 2, name: 'Order 2', date: '2024-06-29' }
  ];

  private wods : Wod[]= [
    {
      id: 4,
      name: 'Annie',
      type: 'wod',
      level: 'Rx',
      isBenchMark: true,
      duration: '', // For time
      executionType: 'for-time',
      description: 'Complete the following for time:',
      targetTimeToCompletion: {
        beginner: '10:00',
        intermediate: '7:30',
        rx: '5:30',
        pro: '4:00'
      },
      content: [
        {
          movement: 'Double-Unders',
          movementDuration: '',
          movementRepetition: 50,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'jump rope',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '2:30',
            intermediate: '2:00',
            rx: '1:30',
            pro: '1:00'
          }
        },
        {
          movement: 'Sit-Ups',
          movementDuration: '',
          movementRepetition: 50,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '3:00',
            intermediate: '2:30',
            rx: '2:00',
            pro: '1:30'
          }
        },
        {
          movement: 'Double-Unders',
          movementDuration: '',
          movementRepetition: 40,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'jump rope',
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '2:00',
            intermediate: '1:45',
            rx: '1:15',
            pro: '0:55'
          }
        },
        {
          movement: 'Sit-Ups',
          movementDuration: '',
          movementRepetition: 40,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '2:30',
            intermediate: '2:00',
            rx: '1:30',
            pro: '1:10'
          }
        },
        {
          movement: 'Double-Unders',
          movementDuration: '',
          movementRepetition: 30,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'jump rope',
          movementType: '',
          part: 3,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:30',
            intermediate: '1:15',
            rx: '1:00',
            pro: '0:45'
          }
        },
        {
          movement: 'Sit-Ups',
          movementDuration: '',
          movementRepetition: 30,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 3,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '2:00',
            intermediate: '1:45',
            rx: '1:20',
            pro: '1:00'
          }
        },
        {
          movement: 'Double-Unders',
          movementDuration: '',
          movementRepetition: 20,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'jump rope',
          movementType: '',
          part: 4,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:00',
            intermediate: '0:50',
            rx: '0:40',
            pro: '0:30'
          }
        },
        {
          movement: 'Sit-Ups',
          movementDuration: '',
          movementRepetition: 20,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 4,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:30',
            intermediate: '1:00',
            rx: '0:50',
            pro: '0:40'
          }
        },
        {
          movement: 'Double-Unders',
          movementDuration: '',
          movementRepetition: 10,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'jump rope',
          movementType: '',
          part: 5,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '0:45',
            intermediate: '0:35',
            rx: '0:25',
            pro: '0:20'
          }
        },
        {
          movement: 'Sit-Ups',
          movementDuration: '',
          movementRepetition: 10,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 5,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:00',
            intermediate: '0:50',
            rx: '0:40',
            pro: '0:30'
          }
        }
      ],
      targetMuscleGroups: ['Core', 'Cardio'],
      skillLevel: 'Intermediate',
      equipmentNeeded: ['Jump Rope', 'Mat for Sit-Ups'],
      notes: 'Focus on maintaining speed and rhythm during the double-unders and keep a steady pace on the sit-ups.'
    },
    {
      id: 5,
      name: 'Fran',
      type: 'wod',
      level: 'Rx',  // Level of the WOD (beginner or Rx)
      isBenchMark: true,
      duration: '', // For time
      executionType: 'for-time',
      description: '21-15-9 reps for time of Thrusters and Pull-Ups.',
      targetTimeToCompletion: {
        beginner: '10:00',
        intermediate: '7:00',
        rx: '5:00',
        pro: '3:30'
      },
      content: [
        {
          movement: 'Thruster',
          movementDuration: '',
          movementRepetition: 21,
          distance: null,
          calories: null,
          weight: {
            male: '95', // in lbs
            female: '65' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '2:00',
            intermediate: '1:30',
            rx: '1:00',
            pro: '0:45'
          }
        },
        {
          movement: 'Pull-Up',
          movementDuration: '',
          movementRepetition: 21,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'pull-up bar',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '2:00',
            intermediate: '1:30',
            rx: '1:00',
            pro: '0:45'
          }
        },
        {
          movement: 'Thruster',
          movementDuration: '',
          movementRepetition: 15,
          distance: null,
          calories: null,
          weight: {
            male: '95', // in lbs
            female: '65' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:30',
            intermediate: '1:00',
            rx: '0:45',
            pro: '0:30'
          }
        },
        {
          movement: 'Pull-Up',
          movementDuration: '',
          movementRepetition: 15,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'pull-up bar',
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:30',
            intermediate: '1:00',
            rx: '0:45',
            pro: '0:30'
          }
        },
        {
          movement: 'Thruster',
          movementDuration: '',
          movementRepetition: 9,
          distance: null,
          calories: null,
          weight: {
            male: '95', // in lbs
            female: '65' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 3,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: '0:30',
            pro: '0:20'
          }
        },
        {
          movement: 'Pull-Up',
          movementDuration: '',
          movementRepetition: 9,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'pull-up bar',
          movementType: '',
          part: 3,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: '0:30',
            pro: '0:20'
          }
        }
      ],
      targetMuscleGroups: ['Full Body', 'Legs', 'Back', 'Shoulders'],
      skillLevel: 'Intermediate',
      equipmentNeeded: ['Barbell', 'Pull-Up Bar'],
      notes: 'Keep a steady pace through the thrusters and pull-ups.'
    },
    {
      id: 6,
      name: 'Isabel',
      type: 'wod',
      level: 'Rx',  // Level of the WOD (beginner or Rx)
      isBenchMark: true,
      duration: '', // For time
      executionType: 'for-time',
      description: 'Complete 30 snatches for time.',
      targetTimeToCompletion: {
        beginner: '7:00',
        intermediate: '5:00',
        rx: '3:00',
        pro: '2:30'
      },
      content: [
        {
          movement: 'Snatch',
          movementDuration: '',
          movementRepetition: 30,
          distance: null,
          calories: null,
          weight: {
            male: '135', // in lbs
            female: '95' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '7:00',
            intermediate: '5:00',
            rx: '3:00',
            pro: '2:30'
          }
        }
      ],
      targetMuscleGroups: ['Full Body', 'Shoulders', 'Legs', 'Core'],
      skillLevel: 'Advanced',
      equipmentNeeded: ['Barbell'],
      notes: 'Focus on technique and speed.'
    },
    {
      id: 7,
      name: 'Diane',
      type: 'wod',
      level: 'Rx',  // Level of the WOD (beginner or Rx)
      isBenchMark: true,
      duration: '', // For time
      executionType: 'for-time',
      description: '21-15-9 reps for time of Deadlifts and Handstand Push-Ups.',
      targetTimeToCompletion: {
        beginner: '9:00',
        intermediate: '6:30',
        rx: '5:00',
        pro: '3:30'
      },
      content: [
        {
          movement: 'Deadlift',
          movementDuration: '',
          movementRepetition: 21,
          distance: null,
          calories: null,
          weight: {
            male: '225', // in lbs
            female: '155' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '3:00',
            intermediate: '2:00',
            rx: '1:30',
            pro: '1:00'
          }
        },
        {
          movement: 'Handstand Push-Up',
          movementDuration: '',
          movementRepetition: 21,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '3:00',
            intermediate: '2:00',
            rx: '1:30',
            pro: '1:00'
          }
        },
        {
          movement: 'Deadlift',
          movementDuration: '',
          movementRepetition: 15,
          distance: null,
          calories: null,
          weight: {
            male: '225', // in lbs
            female: '155' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '2:00',
            intermediate: '1:30',
            rx: '1:00',
            pro: '0:45'
          }
        },
        {
          movement: 'Handstand Push-Up',
          movementDuration: '',
          movementRepetition: 15,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '2:00',
            intermediate: '1:30',
            rx: '1:00',
            pro: '0:45'
          }
        },
        {
          movement: 'Deadlift',
          movementDuration: '',
          movementRepetition: 9,
          distance: null,
          calories: null,
          weight: {
            male: '225', // in lbs
            female: '155' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 3,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:30',
            intermediate: '1:00',
            rx: '0:45',
            pro: '0:30'
          }
        },
        {
          movement: 'Handstand Push-Up',
          movementDuration: '',
          movementRepetition: 9,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 3,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: '0:15',
            pro: '0:10'
          },
          targetTimeToCompletion: {
            beginner: '1:30',
            intermediate: '1:00',
            rx: '0:45',
            pro: '0:30'
          }
        }
      ],
      targetMuscleGroups: ['Back', 'Legs', 'Shoulders'],
      skillLevel: 'Advanced',
      equipmentNeeded: ['Barbell', 'Gymnastic Area'],
      notes: 'Maintain a good balance between the deadlifts and handstand push-ups.'
    },
    {
      id: 8,
      name: 'Murph',
      type: 'wod',
      level: 'Rx',  // Level of the WOD (beginner or Rx)
      isBenchMark: true,
      duration: '', // For time
      executionType: 'for-time',
      description: '1-mile run, then 100 pull-ups, 200 push-ups, 300 air squats, followed by another 1-mile run.',
      targetTimeToCompletion: {
        beginner: '50:00',
        intermediate: '40:00',
        rx: '35:00',
        pro: '30:00'
      },
      content: [
        {
          movement: 'Run',
          movementDuration: '',
          movementRepetition: null,
          distance: {
            male: '1600', // 1 mile in meters
            female: '1600'
          },
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: '0:30',
            pro: '0:20'
          },
          targetTimeToCompletion: {
            beginner: '10:00',
            intermediate: '8:00',
            rx: '7:00',
            pro: '6:00'
          }
        },
        {
          movement: 'Pull-Up',
          movementDuration: '',
          movementRepetition: 100,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'pull-up bar',
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: '0:30',
            pro: '0:20'
          },
          targetTimeToCompletion: {
            beginner: '10:00',
            intermediate: '8:00',
            rx: '6:00',
            pro: '5:00'
          }
        },
        {
          movement: 'Push-Up',
          movementDuration: '',
          movementRepetition: 200,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: '0:30',
            pro: '0:20'
          },
          targetTimeToCompletion: {
            beginner: '15:00',
            intermediate: '12:00',
            rx: '10:00',
            pro: '8:00'
          }
        },
        {
          movement: 'Air Squat',
          movementDuration: '',
          movementRepetition: 300,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: '0:30',
            pro: '0:20'
          },
          targetTimeToCompletion: {
            beginner: '20:00',
            intermediate: '15:00',
            rx: '12:00',
            pro: '10:00'
          }
        },
        {
          movement: 'Run',
          movementDuration: '',
          movementRepetition: null,
          distance: {
            male: '1600', // 1 mile in meters
            female: '1600'
          },
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 3,
          transitionTime: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: '0:30',
            pro: '0:20'
          },
          targetTimeToCompletion: {
            beginner: '10:00',
            intermediate: '8:00',
            rx: '7:00',
            pro: '6:00'
          }
        }
      ],
      targetMuscleGroups: ['Full Body', 'Legs', 'Core', 'Cardio'],
      skillLevel: 'Advanced',
      equipmentNeeded: ['Running Area', 'Pull-Up Bar'],
      notes: 'Consider partitioning the pull-ups, push-ups, and air squats into rounds (e.g. 20 rounds of 5-10-15).'
    },
    {
      id: 9,
      name: 'Chad1000',
      type: 'wod',
      level: 'Rx',  // Level of the WOD (beginner or Rx)
      isBenchMark: true,
      duration: '', // For time
      executionType: 'for-time',
      description: 'Complete 1000 box step-ups for time.',
      targetTimeToCompletion: {
        beginner: '50:00',
        intermediate: '40:00',
        rx: '35:00',
        pro: '30:00'
      },
      content: [
        {
          movement: 'Box Step-Up',
          movementDuration: '',
          movementRepetition: 1000,
          distance: null,
          calories: null,
          weight: null,
          height: {
            male: '20', // in inches
            female: '20'
          },
          machine: 'box',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: '0:30',
            pro: '0:20'
          },
          targetTimeToCompletion: {
            beginner: '50:00',
            intermediate: '40:00',
            rx: '35:00',
            pro: '30:00'
          }
        }
      ],
      targetMuscleGroups: ['Legs', 'Cardio'],
      skillLevel: 'Advanced',
      equipmentNeeded: ['Box'],
      notes: 'Maintain a steady pace and consider wearing a weight vest for extra challenge.'
    },
    {
      id: 10,
      name: 'Fran',
      type: 'wod',
      level: 'Scaled',  // Set the level to 'Scaled'
      isBenchMark: false,
      duration: '', // For time
      executionType: 'for-time',
      description: '21-15-9 reps for time of Thrusters and Ring Rows/Jumping Pull-Ups.',
      targetTimeToCompletion: {
        beginner: '8:00',
        intermediate: '6:00',
        rx: null, // Not applicable for scaled version
        pro: null  // Not applicable for scaled version
      },
      content: [
        {
          movement: 'Thruster',
          movementDuration: '',
          movementRepetition: 21,
          distance: null,
          calories: null,
          weight: {
            male: '65', // in lbs
            female: '45' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: null,
            pro: null
          },
          targetTimeToCompletion: {
            beginner: '2:00',
            intermediate: '1:30',
            rx: null,
            pro: null
          }
        },
        {
          movement: 'Ring Row / Jumping Pull-Up',
          movementDuration: '',
          movementRepetition: 21,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'rings / pull-up bar',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: null,
            pro: null
          },
          targetTimeToCompletion: {
            beginner: '2:00',
            intermediate: '1:30',
            rx: null,
            pro: null
          }
        },
        {
          movement: 'Thruster',
          movementDuration: '',
          movementRepetition: 15,
          distance: null,
          calories: null,
          weight: {
            male: '65', // in lbs
            female: '45' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: null,
            pro: null
          },
          targetTimeToCompletion: {
            beginner: '1:30',
            intermediate: '1:00',
            rx: null,
            pro: null
          }
        },
        {
          movement: 'Ring Row / Jumping Pull-Up',
          movementDuration: '',
          movementRepetition: 15,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'rings / pull-up bar',
          movementType: '',
          part: 2,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: null,
            pro: null
          },
          targetTimeToCompletion: {
            beginner: '1:30',
            intermediate: '1:00',
            rx: null,
            pro: null
          }
        },
        {
          movement: 'Thruster',
          movementDuration: '',
          movementRepetition: 9,
          distance: null,
          calories: null,
          weight: {
            male: '65', // in lbs
            female: '45' // in lbs
          },
          height: null,
          machine: 'barbell',
          movementType: '',
          part: 3,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: null,
            pro: null
          },
          targetTimeToCompletion: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: null,
            pro: null
          }
        },
        {
          movement: 'Ring Row / Jumping Pull-Up',
          movementDuration: '',
          movementRepetition: 9,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'rings / pull-up bar',
          movementType: '',
          part: 3,
          transitionTime: {
            beginner: '0:30',
            intermediate: '0:20',
            rx: null,
            pro: null
          },
          targetTimeToCompletion: {
            beginner: '1:00',
            intermediate: '0:45',
            rx: null,
            pro: null
          }
        }
      ],
      targetMuscleGroups: ['Full Body', 'Legs', 'Back', 'Shoulders'],
      skillLevel: 'Beginner',
      equipmentNeeded: ['Barbell', 'Rings or Pull-Up Bar'],
      notes: 'Focus on maintaining good form with the thrusters and achieving full range of motion on the ring rows or jumping pull-ups.'
    },
    {
      id: 11,
      name: 'Echo Bike Challenge',
      type: 'challenge',
      level: 'Rx',  // Typically, challenges don't have scaled versions, but you can adjust as needed
      isBenchMark: false,
      duration: '1:00', // 1 minute
      executionType: 'for-time',
      description: 'Perform 40 calories on the Echo Bike in less than 1 minute.',
      targetTimeToCompletion: {
        beginner: '1:30',
        intermediate: '1:15',
        rx: '1:00',
        pro: '0:50'
      },
      content: [
        {
          movement: 'Echo Bike',
          movementDuration: null,
          movementRepetition: null, // Not applicable for calories
          distance: null, // Not applicable
          calories: {
            male: '40', // 40 calories
            female: '40' // 40 calories, same for both
          },
          weight: null, // Not applicable
          height: null, // Not applicable
          machine: 'Echo Bike',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:00', // No transition time needed as it's a single movement
            intermediate: '0:00',
            rx: '0:00',
            pro: '0:00'
          },
          targetTimeToCompletion: {
            beginner: '1:30',
            intermediate: '1:15',
            rx: '1:00',
            pro: '0:50'
          }
        }
      ],
      targetMuscleGroups: ['Legs', 'Cardio'],
      skillLevel: 'Advanced',
      equipmentNeeded: ['Echo Bike'],
      notes: 'Push hard from the start and try to maintain a steady pace to reach the target calories within the time limit.'
    },
    {
      id: 12,
      name: 'Hang on Bar with One Arm',
      type: 'challenge',
      level: 'Rx',
      isBenchMark: false,
      duration: '100s', // or as long as possible
      executionType: 'for-time',
      description: 'Hang on a bar with one arm for 100 seconds or as long as possible.',
      targetTimeToCompletion: {
        beginner: '30s',
        intermediate: '60s',
        rx: '100s',
        pro: 'as long as possible'
      },
      content: [
        {
          movement: 'Hang on Bar with One Arm',
          movementDuration: '100s',
          movementRepetition: null,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: 'pull-up bar',
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:00',
            intermediate: '0:00',
            rx: '0:00',
            pro: '0:00'
          },
          targetTimeToCompletion: {
            beginner: '30s',
            intermediate: '60s',
            rx: '100s',
            pro: 'as long as possible'
          }
        }
      ],
      targetMuscleGroups: ['Grip', 'Shoulders', 'Core'],
      skillLevel: 'Advanced',
      equipmentNeeded: ['Pull-Up Bar'],
      notes: 'Focus on maintaining a strong grip and stable core throughout the duration.'
    },
    {
      id: 13,
      name: 'Hold 2 Plates of 45 lbs on Each Hand',
      type: 'challenge',
      level: 'Rx',
      isBenchMark: false,
      duration: '1:00', // 1 minute
      executionType: 'for-time',
      description: 'Hold 2 plates of 45 lbs on each hand just by your fingers for one minute.',
      targetTimeToCompletion: {
        beginner: '20s',
        intermediate: '40s',
        rx: '1:00',
        pro: 'as long as possible'
      },
      content: [
        {
          movement: 'Plate Hold',
          movementDuration: '1:00',
          movementRepetition: null,
          distance: null,
          calories: null,
          weight: {
            male: '45 lbs per hand',
            female: '45 lbs per hand'
          },
          height: null,
          machine: null,
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:00',
            intermediate: '0:00',
            rx: '0:00',
            pro: '0:00'
          },
          targetTimeToCompletion: {
            beginner: '20s',
            intermediate: '40s',
            rx: '1:00',
            pro: 'as long as possible'
          }
        }
      ],
      targetMuscleGroups: ['Grip', 'Forearms'],
      skillLevel: 'Advanced',
      equipmentNeeded: ['2 x 45 lbs Plates'],
      notes: 'Focus on maintaining a strong grip, ensuring your fingers are doing all the work.'
    },
    {
      id: 14,
      name: 'One-Leg Chair on Wall',
      type: 'challenge',
      level: 'Rx',
      isBenchMark: false,
      duration: '1:00', // 1 minute
      executionType: 'for-time',
      description: 'Hold a one-leg chair position on the wall for one minute.',
      targetTimeToCompletion: {
        beginner: '20s',
        intermediate: '40s',
        rx: '1:00',
        pro: 'as long as possible'
      },
      content: [
        {
          movement: 'One-Leg Chair on Wall',
          movementDuration: '1:00',
          movementRepetition: null,
          distance: null,
          calories: null,
          weight: null,
          height: null,
          machine: null,
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:00',
            intermediate: '0:00',
            rx: '0:00',
            pro: '0:00'
          },
          targetTimeToCompletion: {
            beginner: '20s',
            intermediate: '40s',
            rx: '1:00',
            pro: 'as long as possible'
          }
        }
      ],
      targetMuscleGroups: ['Legs', 'Core'],
      skillLevel: 'Intermediate',
      equipmentNeeded: ['Wall'],
      notes: 'Focus on keeping the back flat against the wall and maintaining balance on one leg.'
    },
    {
      id: 15,
      name: '25 D-Ball Over Shoulder',
      type: 'challenge',
      level: 'Rx',
      isBenchMark: false,
      duration: '1:00', // 1 minute or max reps
      executionType: 'for-reps',
      description: 'Perform 25 D-ball of 90 lbs over the shoulder in less than 1 minute or as many reps as possible.',
      targetTimeToCompletion: {
        beginner: '10 reps',
        intermediate: '15 reps',
        rx: '25 reps',
        pro: 'max reps'
      },
      content: [
        {
          movement: 'D-Ball Over Shoulder',
          movementDuration: '1:00',
          movementRepetition: 25,
          distance: null,
          calories: null,
          weight: {
            male: '90 lbs',
            female: '90 lbs'
          },
          height: null,
          machine: null,
          movementType: '',
          part: 1,
          transitionTime: {
            beginner: '0:00',
            intermediate: '0:00',
            rx: '0:00',
            pro: '0:00'
          },
          targetTimeToCompletion: {
            beginner: '10 reps',
            intermediate: '15 reps',
            rx: '25 reps',
            pro: 'max reps'
          }
        }
      ],
      targetMuscleGroups: ['Full Body', 'Legs', 'Core', 'Shoulders'],
      skillLevel: 'Advanced',
      equipmentNeeded: ['90 lbs D-Ball'],
      notes: 'Explode through the hips to get the ball over your shoulder, and keep a steady pace to maximize reps.'
    }
  ];

  getOrders() {
    return this.orders;
  }

  getWods(): Wod[] {
    return this.wods;
  }

  getRandomWod(): Wod | undefined {
    return this.wods[Math.floor(Math.random() * this.wods.length)];
  }

  getWodByName(name: string): Wod | undefined {
    return this.wods.find(wod => wod.name === name);
  }

  searchWodByName(name: string): Wod[] {
    return this.wods.filter(wod => wod.name.toLowerCase().includes(name.toLowerCase()));
  }


  getWodByNameAndLevel(name: string, level: string): Wod | undefined {
    return this.wods.find(wod => wod.name === name && wod.level === level);
  }

  getRandomChallenge(): Wod | undefined {
    const challenges = this.wods.filter(wod => wod.type === 'challenge');

    if (challenges.length === 0) {
      return this.getRandomWod();
    }

    return challenges[Math.floor(Math.random() * challenges.length)];
  }

  getRandomWodByType(type: string): Wod | undefined {
    const filtredWods = this.wods.filter(wod => wod.type === type)
    return filtredWods[Math.floor(Math.random() * filtredWods.length)];
  }

  getRandomActiveRecovery(): Wod | undefined {
    const activeRecoveries = this.wods.filter(wod => wod.type === 'active-recovery');
    return activeRecoveries[Math.floor(Math.random() * activeRecoveries.length)];
  }

}
