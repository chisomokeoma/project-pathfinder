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


export interface SignupResponse {
  access_token: string;
}


export interface MentorsListResponse {
  _id:       string;
  name:      string;
  email:     string;
  resources: any[];
  skills:    any[];
  interests: any[];
  status:    boolean;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
}

