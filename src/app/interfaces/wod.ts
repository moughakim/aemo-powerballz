interface GenderSpecificValue {
    male?: string;
    female?: string;
  }
  
  interface Movement {
    movement: string;
    movementDuration: string | null;
    movementRepetition: number| null;
    distance: GenderSpecificValue | null;
    calories: GenderSpecificValue | null;
    weight: GenderSpecificValue | null;
    height: GenderSpecificValue | null;
    machine: string | null;
    movementType: string | null;
    part: number;
    transitionTime: {
      beginner: string;
      intermediate: string;
      rx: string | null;
      pro: string | null;
    };
    targetTimeToCompletion: {
      beginner: string;
      intermediate: string;
      rx: string | null;
      pro: string | null;
    };
  }
  
  export interface Wod {
    id: number;
    name: string;
    type: string;
    level: string;
    isBenchMark: boolean;
    duration: string | null;
    executionType: string;
    description: string;
    targetTimeToCompletion: {
      beginner: string;
      intermediate: string;
      rx: string | null;
      pro: string | null;
    };
    content: Movement[];
    targetMuscleGroups: string[];
    skillLevel: string;
    equipmentNeeded: string[];
    notes: string;
  }
  