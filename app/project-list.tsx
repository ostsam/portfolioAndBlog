import { toEditorSettings } from "typescript";

export type ListItem = {
  project: string;
  link: string;
};

export const list: ListItem[] = [
  { project: "Malan Language Tutor", link: "https://malan.vercel.app/" },
  {
    project: "Pet Rock Simulator",
    link: "https://pet-rock-simulator.vercel.app/",
  },
  { project: "Tic-Tac-Toe", link: "https://tictactoe-lime-sigma.vercel.app/" },
];
