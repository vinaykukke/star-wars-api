export interface IPeopleProps {
  savePeople: (people: Object) => void;
  setInfo: (info: any) => void;
  people: any[];
  savedPeople: any[];
  remove: (person: string) => void;
}
