import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user';
import { locations } from './locations';
import {  located } from './Loaction';

import { Loader } from '@googlemaps/js-api-loader';
import { launchyear } from './launchyear';





declare var google:any;



@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpacexComponent  {

// naam:any;

// getValue(name:any){

// this.naam=name.target.value;
// }

// getName()
// {
//   alert(this.naam);
// }

constructor(private http:HttpClient){

  console.log(this.getPast());
  console.log(this.getUpcoming());
  console.log(this.getLocation());
  console.log(this.getLaunchYear());

  console.log(this.years)

}

users : user[] =[] ;

past:any;

pasturl:string="https://api.spacexdata.com/v3/launches/past";

getPast()
{

  return this.http.get<any>(this.pasturl).subscribe((response)=>{
    this.users=response;

    console.log(this.users.length);
    console.log(this.users)
    this.past=this.users.length;



  });


}


users2 : user[]=[];
upcoming:any;
upcomingurl:string="https://api.spacexdata.com/v3/launches/upcoming";
getUpcoming()
{

  return this.http.get<user[]>(this.upcomingurl).subscribe((response)=>{
    this.users2=response;

    console.log(this.users2.length);
    console.log(this.users2)
    this.upcoming=this.users2.length;



  });


}

locateurl:string="https://api.spacexdata.com/v3/launchpads";
locationss:located[] =[] ;

long:any;
latt:any;
name:any;

getLocation()
{

  return this.http.get<any>(this.locateurl).subscribe((response)=>{
    this.locationss=response;

    // console.log(this.locationss.length);
    console.log(this.locationss)
    // this.past=this.locations.length;
   this.long=this.locationss[0].location.longitude;
   this.latt=this.locationss[0].location.latitude;
    this.name=this.locationss[0].location.name;


  });
}

index=[0,1,2,3,4]
myChart:any;
chart:any;
  years=new Array<any>();
  timelineutc=new Array<any>();

yearurl="https://api.spacexdata.com/v3/launches";
  launchyears:launchyear[]=[];
year1=new Array<any>();

numSequence(n: number): Array<number> {
  return Array(n);
}

getLaunchYear()
{
  // this.years.push(this.year1)

  this.http.get<launchyear[]>(this.yearurl).subscribe(response=>{
    this.launchyears.push(...response);

    for (let index = 0; index < this.launchyears.length; index++) {

      // this.timelineutc.push({name:this.launchyears[index].launch_year,series:[{name:this.launchyears[index].launch_year,value:this.launchyears[index].flight_number,value2:this.launchyears[index].launch_date_utc}]})
      this.year1.push(this.launchyears[index].launch_year)
    }


    for (let index = 0; index < this.launchyears.length; index++) {
      let count=0;
      for (let index1 = 0; index1 < this.launchyears.length; index1++) {

        if(this.launchyears[index].launch_year==this.launchyears[index1].launch_year){
          count++
        }

      }
      if(count>=1)
      {
     console.log("values---"+this.launchyears[index].launch_year+"count is"+count)
        this.years.push({name:this.launchyears[index].launch_year,value:count})

      }

    }
    let year2=new Set<any>(this.year1)
    this.year1=[...year2]
    console.log("new year="+this.year1)

    this.timelineutc=[{


        name: "Germany",
        "series": [
          {
            "name": this.year1[0],
            "value": 6200000,
            "value2":this.launchyears[0].launch_date_utc
          },
          {
            "name": this.year1[1],
            "value": 73000000,
            "value2":this.launchyears[1].launch_date_utc
          },
          {
            "name": this.year1[2],
            "value": 89400000,
            "value2":this.launchyears[2].launch_date_utc
          }
        ]
      },

      {
        "name": "USA",
        "series": [
          {
            "name": this.year1[0],
            "value": 250000000,
            "value2":this.launchyears[3].launch_date_utc
          },
          {
            "name": this.year1[1],
            "value": 309000000,
            "value2":this.launchyears[4].launch_date_utc
          },
          {
            "name": this.year1[2],
            "value": 311000000,
            "value2":this.launchyears[5].launch_date_utc
          }
        ]
      },

      {
        "name": "France",
        "series": [
          {
            "name": this.year1[0],
            "value": "58000000",
            "value2":this.launchyears[6].launch_date_utc
          },
          {
            "name": this.year1[1],
            "value": 50000020,
            "value2":this.launchyears[7].launch_date_utc
          },
          {
            "name": this.year1[2],
            "value": 58000000,
            "value2":this.launchyears[8].launch_date_utc
          }
        ]
      },
      {
        "name": "UK",
        "series": [
          {
            "name": this.year1[0],
            "value": 57000000,
            "value2":this.launchyears[9].launch_date_utc
          },
          {
            "name": this.year1[2],
            "value": 62000000,
            "label":this.launchyears[10].launch_date_utc
          }
        ]

    }]

    this.years=[...this.years]
    // this.timelineutc=[...this.timelineutc]
    // this.years=(response.map(e=>({



      // }
    //  name:e.launch_year,


    //  value:e.flight_number
    // })))
    // console.log(this.years)


  });
  console.log(this.launchyears)
}

getPrint(song:any)
{
  this.years.push(song)
  console.log(this.years)
}


saleData = [
  { name: "Mobiles", value: "105000" },
  { name: "Laptop", value: "55000" },
  { name: "AC", value: "15000" },
  { name: "Headset", value: "150000" },
  { name: "Fridge", value: "20000" }
];

saleYear = [
  { name: "Mobiles", value: 10 },
  { name: "Laptop", value: 55 },
  { name: "AC", value: 15},
  { name: "Headset", value: 10 },
  { name: "Fridge", value: 20 }
];
xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Launch_time_utc';
  multi = [
    {
      name: "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 250000000
        },
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 311000000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "1990",
          "value": "58000000"
        },
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "1990",
          "value": 57000000
        },
        {
          "name": "2010",
          "value": 62000000
        }
      ]
    }
  ];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }




}
