type Info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoType = Info & {
  role: string;
  lastLogin: Date;
};

export type { Info, AdminInfoType };
