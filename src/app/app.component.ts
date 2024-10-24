import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Imonth, IParentCatagory, ITableData, IChildCatagoryData } from './interface/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  months: Imonth[] = [];
  tableData: ITableData[] = [];
  tableData1: IParentCatagory[] = [];

  constructor() {
    const beginMonth = "2024-01-01";
    const endMonth = "2024-12-01";
    this.months = this.getMonthsBetween(endMonth, beginMonth);
  }

  getMonthsBetween(beginMonth: string, endMonth: string): Imonth[] {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let startDate = new Date(beginMonth);
    let endDate = new Date(endMonth);

    startDate > endDate ? [startDate, endDate] = [endDate, startDate] : null;

    let result: Imonth[] = [];
    let month: Imonth = {};

    //improve with id of month
    while (startDate <= endDate) {
      const monthText = `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
      month = {0: monthText}
      result.push(monthText);
      startDate.setMonth(startDate.getMonth() + 1);
    }

    return result;
  }

  //data have 1 income and 1 out come
  initData() {
    let result: IParentCatagory[] = [];
    let IChildCatagoryData: IChildCatagoryData
    let Parencatagory: IParentCatagory = {
      isIncomeCatagory: true,
      name: "General Income",
      listChildren: []
    };

    this.months.every(month => {

    })
  }
}
