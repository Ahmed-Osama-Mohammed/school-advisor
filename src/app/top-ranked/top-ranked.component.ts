import { TopRankedSchoolService } from './../../services/top-ranked-school.service';
import { SchoolData } from 'src/shared/modules/schooldata.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-ranked',
  templateUrl: './top-ranked.component.html',
  styleUrls: [
    '../../shared/school-table-stlyes/school-style.css',
    './top-ranked.component.css',
  ],
})
export class TopRankedComponent implements OnInit {
  filterObject: any = {};
  type: string = 'All';
  types: string[] = [
    'All',
    'Private Arabic',
    'Private languages',
    'American',
    'British',
    'Canadian',
    'TP',
    'Special needs',
    'Private',
    'Religion',
  ];

  city: string = 'All';

  cities: string[] = [
    'All',
    'Cairo',
    'Alexandria',
    'Port',
    'SaidSuez',
    'Ismailia',
    'Kafr El Sheikh',
    'Gharbia',
    'Dakahlia',
    'Sharqia',
    'Monufia',
    'Qalyubia',
    'Damietta',
    'Beheira',
    'Giza',
    'Faiyum',
    'Beni Suef',
    'Minya',
    'Asyut',
    'Sohag',
    'Qena',
    'Aswan',
    'Luxor',
    'Red Sea',
    'New Valley',
    'Matrouh',
    'North Sinai',
    'South Sinai',
  ];

  grade: string = 'All';

  grades: string[] = ['All', '1:6', '1:12'];

  gender: string = 'Mixed';

  genders: string[] = ['Mixed', 'male', 'female'];

  exambody: boolean = true;

  price: number = 0;

  activity: string = 'None';

  activities: string[] = ['None', 'Montessori', 'online'];

  Religion: string = 'All';

  Religions: string[] = ['All', 'Islamic', 'Christian'];

  sort: string = 'Top Ranked School';

  allSchools: SchoolData[] = [];

  showKey: boolean = true;

  constructor(private TopRankedSchoolService: TopRankedSchoolService) {
    this.allSchools.sort(function (a, b) {
      if (a.rank === 0) return 1;
      else if (b.rank === 0) return -1;
      else return a.rank - b.rank;
    });
    let resize: any = document.querySelector('.filter');
    window.addEventListener('resize', function () {
      if (window.innerWidth < 1200) resize.classList.remove('col-3');
    });
  }

  showOneDiv() {
    this.showKey = false;
    let oneButton = document.querySelector('.one-div') as HTMLElement;
    let threeButton = document.querySelector('.three-divs') as HTMLElement;
    oneButton.classList.add('bord');
    threeButton.classList.remove('bord');
  }
  showThreeDiv() {
    this.showKey = true;
    let oneButton = document.querySelector('.one-div') as HTMLElement;
    let threeButton = document.querySelector('.three-divs') as HTMLElement;
    threeButton.classList.add('bord');
    oneButton.classList.remove('bord');
  }

  divsSort() {
    let rec: any = [];
    let fea: any = [];
    if (this.sort.toLowerCase() == 'top ranked school') {
      this.allSchools.sort(function (a, b) {
        if (a.rank === 0) return 1;
        else if (b.rank === 0) return -1;
        else return a.rank - b.rank;
      });
    } else if (this.sort.toLowerCase() == 'name ascending') {
      this.allSchools.sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
    } else if (this.sort.toLowerCase() == 'name descending') {
      this.allSchools.sort(function (a, b) {
        return b.name < a.name ? -1 : b.name > a.name ? 1 : 0;
      });
    } else if (this.sort.toLowerCase() == 'fee ascending') {
      this.allSchools.sort(function (a, b) {
        if (a.fee === 0) return 1;
        else if (b.fee === 0) return -1;
        else return a.fee - b.fee;
      });
    } else if (this.sort.toLowerCase() == 'fee descending') {
      this.allSchools.sort(function (a, b) {
        if (a.fee === 0) return 1;
        else if (b.fee === 0) return -1;
        else return b.fee - a.fee;
      });
    } else if (this.sort.toLowerCase() == 'featured schools') {
      for (let x = 0; x < this.allSchools.length; x++) {
        if (this.allSchools[x].featured === true) {
          fea.push(this.allSchools[x]);
        }
      }
      this.allSchools = fea.concat(this.allSchools);
      for (let y = 0; y < this.allSchools.length; y++) {
        for (let z = y + 1; z < this.allSchools.length; z++) {
          if (this.allSchools[y].name == this.allSchools[z].name) {
            this.allSchools.splice(z, 1);
          }
        }
      }
    } else if (this.sort.toLowerCase() == 'recommended schools') {
      for (let i = 0; i < this.allSchools.length; i++) {
        if (this.allSchools[i].recommended === true) {
          rec.push(this.allSchools[i]);
        }
      }
      this.allSchools = rec.concat(this.allSchools);
      for (let j = 0; j < this.allSchools.length; j++) {
        for (let k = j + 1; k < this.allSchools.length; k++) {
          if (this.allSchools[j].name == this.allSchools[k].name) {
            this.allSchools.splice(k, 1);
          }
        }
      }
    }
  }

  openFilter() {
    let filter = document.querySelector('section#filters') as HTMLElement;
    filter.style.left = '0px';
  }
  close() {
    let filter = document.querySelector('section#filters') as HTMLElement;
    filter.style.left = '-303px';
  }

  filter(filterOption: string) {
    if (filterOption == 'type') {
      if (this.type == 'All') {
        delete this.filterObject[`${filterOption}`];
      } else {
        this.filterObject[`${filterOption}`] = this.type;
      }
    } else if (filterOption == 'government') {
      if (this.city == 'All') {
        delete this.filterObject[`${filterOption}`];
      } else {
        this.filterObject[`${filterOption}`] = this.city;
      }
    } else if (filterOption == 'gender') {
      if (this.gender == 'Mixed') {
        delete this.filterObject[`${filterOption}`];
      } else {
        this.filterObject[`${filterOption}`] = this.gender;
      }
    } else if (filterOption == 'grade') {
      if (this.grade == 'All') {
        delete this.filterObject[`${filterOption}`];
      } else {
        this.filterObject[`${filterOption}`] = this.grade;
      }
    } else if (filterOption == 'exambody') {
      if (this.grade == 'All') {
        delete this.filterObject[`${filterOption}`];
      } else {
        this.filterObject[`${filterOption}`] = this.exambody;
      }
    }

    let url: string = '';
    for (const [key, value] of Object.entries(this.filterObject)) {
      url = url + `${key}=${value}&`;
    }
    this.TopRankedSchoolService.getFilteredSchoolsData(url).subscribe(
      (response) => {
        this.allSchools = response;
      }
    );
  }

  ngOnInit(): void {
    this.TopRankedSchoolService.getschoolsData().subscribe((response) => {
      this.allSchools = response;
    });
  }
}
