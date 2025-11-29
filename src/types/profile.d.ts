export interface Profile {
  id: number;
  level: number;
  maxLevel: number;
  name: string;
  surname: string;
  full_name: string;
  avatar: string;
  balance: {
    cash: number;
    card: number;
  };
  uc: number;
  status: {
    name: string;
    color: string;
    icon: string;
    end_date: string;
  };
}
