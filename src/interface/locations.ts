export interface ILabLocation {
  id: string;
  title: string;
  address: string;
  schedule: string;
  openTime: string;
  coordinates?: [number, number]; 
}