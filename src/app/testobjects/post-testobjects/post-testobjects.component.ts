import { Component, OnInit } from '@angular/core';
import { TestobjectsService } from '../../Services/testobjects.service';

@Component({
  selector: 'app-post-testobjects',
  templateUrl: './post-testobjects.component.html',
  styleUrls: ['./post-testobjects.component.scss']
})
export class PostTestobjectsComponent implements OnInit {

  constructor(private testobjectsService: TestobjectsService) { }

  ngOnInit(): void {
  }


  onPostTestobject(name: HTMLTextAreaElement, age: HTMLTextAreaElement){
    if (name.value != '' && age.value != '' && !isNaN(Number(age.value))){
      const testobject = {
        name: name.value,
        age: age.value
      };

      this.testobjectsService.postTestobject(testobject).subscribe();

      name.value = '';
      age.value = '';
    }else{
      alert('Entry is not Correct!');
    }
  }
}
