import { Component, OnInit } from '@angular/core';
import { TestobjectsService } from '../../Services/testobjects.service';

@Component({
  selector: 'app-delete-testobjects',
  templateUrl: './delete-testobjects.component.html',
  styleUrls: ['./delete-testobjects.component.scss']
})
export class DeleteTestobjectsComponent implements OnInit {

  constructor(private testobjectsService: TestobjectsService) { }

  ngOnInit(): void {
  }

  onDeleteTestobject(id: HTMLTextAreaElement){
    this.testobjectsService.deleteTestobject(id.value).subscribe();
    id.value = '';
  }

}
