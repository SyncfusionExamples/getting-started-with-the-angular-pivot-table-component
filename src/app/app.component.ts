import { Component, OnInit } from '@angular/core';
import { PivotViewModule , PivotFieldListModule} from '@syncfusion/ej2-angular-pivotview';
import { IDataOptions, IDataSet,FieldListService, CalculatedFieldService } from '@syncfusion/ej2-angular-pivotview';


@Component({
  imports: [    
     PivotViewModule,
     PivotFieldListModule
],
standalone:true,
  selector: 'app-container',
  providers: [FieldListService, CalculatedFieldService],
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width allowCalculatedField='true' showFieldList='true'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
    public pivotData!: IDataSet[];
    public dataSourceSettings!: IDataOptions;
    public width?: string;
    ngOnInit(): void {

        this.pivotData = [
          { Amount: 2100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 22, State: "Alberta" },
          { Amount: 1100, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 32, State: "Quebec" },
          { Amount: 3100, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 22, State: "Alberta" },
          { Amount: 4800, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 49, State: "Charente-Maritime" },
          { Amount: 9100, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 64, State: "Charente-Maritime" },
          { Amount: 2350, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 46, State: "Gers" },
          { Amount: 3400, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 78, State: "Bayern" },
          { Amount: 8400, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 90, State: "Hamburg" },
          { Amount: 7200, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 92, State: "Bayern" },
          { Amount: 1040, Country: "United Kingdom", Date: "FY 2005", Product: "Bike", Quantity: 47, State: "England" },
          { Amount: 1500, Country: "United Kingdom", Date: "FY 2006", Product: "Van", Quantity: 24, State: "England" },
          { Amount: 4820, Country: "United Kingdom", Date: "FY 2008", Product: "Car", Quantity: 72, State: "England" },
          { Amount: 1520, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 53, State: "North Carolina" },
          { Amount: 3320, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 49, State: "South Carolina" },
          { Amount: 6300, Country: "United States", Date: "FY 2008", Product: "Van", Quantity: 45, State: "South Carolina" },];

        this.dataSourceSettings = {
            dataSource: this.pivotData,
            columns: [{ name: 'Date', caption: 'Date' }, { name: 'Product' }],
            expandAll: false,
            enableSorting: true,
            filters: [],
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            rows: [{ name: 'Country' }, { name: 'State' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity', caption: 'Quantity' }],
            calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
        };
        this.width = "100%";
    }
}