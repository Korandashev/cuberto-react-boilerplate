// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Request {
  export interface Login {
    email: string;
    password: string;
  }

  export interface Registration {
    email: string;
    password: string;
  }
}
