import { ITask } from "../../../app/Interfaces/ITask";

export const dummyUsers = [
  { id: "1", imageUrl: "", username: "Timo von Pumba" },
  { id: "2", imageUrl: "", username: "y" },
  { id: "3", imageUrl: "", username: "z" },
];

export const dummyTasks: ITask[] = [
  {
    id: "37489248923489",
    title: "Migration from LiteDb to MongoDb",
    description:
      "How long do you think would a migration from LiteDb to MongoDb take? Since we have no initial data, we can omit this step.",
    status: 0,
  },
  {
    id: "3741231283913489",
    title: "Move to WebSockets",
    description: "How long do you think do we need to integrate WebSockets?",
    status: 3,
  },
];
