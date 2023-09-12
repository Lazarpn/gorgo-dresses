export interface DressCreateModel {
  name: string;
  type: string;
  rentingPrice: number;
  sellingPrice: number;
  date: Date;
  file: FormData;
}
