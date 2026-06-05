export interface Student {
  age: number;
  name: string;
}

const defaultStudent: Student = {
  age: 1,
  name: 'aini',
};

export function getStudent(): Student {
  return defaultStudent;
}

export default getStudent;
