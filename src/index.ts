import { add } from './math';
import { getStudent } from './enrollment';

export { add, getStudent };

export function createDemoSummary() {
  const student = getStudent();
  return {
    sum: add(1, 2),
    studentName: student.name,
  };
}

export default {
  add,
  getStudent,
  createDemoSummary,
};
