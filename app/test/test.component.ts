import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  // getLaunchYear():Observable<launchyear[]>
  // {
  //   // this.years.push(this.year1)
  //    return this.http.get<launchyear[]>(this.yearurl).pipe(tap(data=>console.log('all: '+JSON.stringify(data))))
  //   }

  //   getSub()
  //   {
  //     this.getLaunchYear().subscribe(
  //       {
  //         next:a=>{

  //           this.launchyears=a;

  //           console.log(this.launchyears)
  //         }
  //       })
  //   }

}
