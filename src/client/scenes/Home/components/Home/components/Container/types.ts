export interface IContainerProps {
  savePeople: (people: any) => void;
  remove: (person: string) => void;
  savedPeople: any[];
  setInfo: (info: any) => void;
  people: any[];
  info: any;
}
