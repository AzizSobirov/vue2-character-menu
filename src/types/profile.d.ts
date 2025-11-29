export interface Profile {
  id: number;
  level: number;
  name: string;
  avatar: string;
  balance: {
    cash: number;
    card: number;
  };
}
