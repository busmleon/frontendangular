import { Component, OnInit } from '@angular/core';
import { TestobjectsService } from '../../Services/testobjects.service'
import { testobject } from '../../Model/testobject';


@Component({
  selector: 'app-get-testobjects',
  templateUrl: './get-testobjects.component.html',
  styleUrls: ['./get-testobjects.component.scss']
})
export class GetTestobjectsComponent implements OnInit {

  constructor(private testobjectsService: TestobjectsService) { }

  ngOnInit(): void {

  }

  onGetTestobjects(area: HTMLTextAreaElement): void{
    const req = this.testobjectsService.getTestobjects().subscribe(
      res => {

        var temp = '';
        for (let testobject of res)
          temp += JSON.stringify(testobject);

        area.value = temp;
      });
  }

}
