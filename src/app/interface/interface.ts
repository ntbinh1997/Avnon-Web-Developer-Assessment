export interface IParentCatagory {
  isIncomeCatagory: boolean;
  name: string;
  listChildren: [IChildCatagory];
}

export interface IChildCatagory {
  data: [IChildCatagoryData];
  name: string
}

export interface IChildCatagoryData {
  [month: string]: number;
}

export interface Imonth {
  [month: number]: string;
}

export interface ITableData {
  listIncomeCatagories: [IParentCatagory];
}
