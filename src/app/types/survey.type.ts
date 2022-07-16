export interface Survey {
  name: string,
  author: string,
  slug: string,
  description: string,
  questions: Question[],


  // Dates;
  createdAt?: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type Question = {
  id: string|number,
  type: QUESTION_TYPES,
  title: string,
  options?: QuestionOption[]
}

export type QuestionOption = {
  id: number,
  label: string,
  description?: string
}

export enum QUESTION_TYPES {
  INPUT = 1,
  SELECTION = 2,
}
