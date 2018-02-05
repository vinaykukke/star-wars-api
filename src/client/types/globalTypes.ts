export interface IState {
  home: any;
}

// This acts like a function
// USAGE: ICommunicator<IEmail>, will result in
// send: (item: IEmail) => void;
//
// export interface ICommunicator<T> {
//   send: (item: T) => void,
// }
