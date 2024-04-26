export interface ISignUp {
  name: string;
  email: string;
  password: string;
  skills: Skills;
  interests: any[];
  verificationPin: string;
  status: boolean;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Skills {
  types: any[];
}
