import { Component } from '@angular/core';
import { IDataOptions, IDataSet, FieldListService, CalculatedFieldService, GroupingBarService  } from '@syncfusion/ej2-angular-pivotview';
import { pivot_Data } from './data';

@Component({
  selector: 'app-root',
  providers: [FieldListService, CalculatedFieldService, GroupingBarService],
  template: `<div style="height: 480px; margin: 100px "><ejs-pivotview #pivotview id='PivotView' width='100%' height='300' [dataSourceSettings]=dataSourceSettings allowCalculatedField='true' 
  showGroupingBar='false' showFieldList='true'></ejs-pivotview></div>`
})

export class AppComponent {
    dataSourceSettings: IDataOptions;

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: pivot_Data as IDataSet[],
            values: [{name: "Sold", caption:'Unit Sold'}, {name: "Amount", caption:'Sold Amount'}],
            rows: [{name:"Country"}, {name: 'Products'}],
            drilledMembers: [{ name: 'Country', items: ['Germany'] }, { name: 'Year', items: ['FY 2016'] } ],
            columns:[{name: "Year"}, {name:"Quarter"}],
            formatSettings: [{name: 'Amount', format: 'C2'}],
            filters :[ {name: "Products"}],
            filterSettings: [{ name: 'Products', type: 'Include', items: ['Mountain Bikes'] }],
            sortSettings: [{name:'Country', order:'Descending'}],
            calculatedFieldSettings: [{ name: "Total", formula: '"Sum(Amount)"+"Sum(Sold)"'}]
        };
    }
}