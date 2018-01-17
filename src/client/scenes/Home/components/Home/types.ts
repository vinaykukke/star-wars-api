export interface IHomeProps {
  fetchPeople: () => void;
  savePeople: (people: any) => void;
  setInfo: (info: any) => void;
  remove: (person: string) => void;
  people: IPerson[];
  savedPeople: any[];
  info: any;
}

export interface IPerson {
  birth_year: string;
  eye_color: string;
  films: any[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: any[];
  starships: any[];
  url:string;
  vehicles:any[];
}
