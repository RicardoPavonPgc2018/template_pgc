import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-recursos-proyecto',
  templateUrl: './recursos-proyecto.component.html',
  styleUrls: ['./recursos-proyecto.component.scss'],
})
export class RecursosProyectoComponent implements OnInit {
  public uploadedFiles: any;
  public msgs: any;
  constructor() { }

  ngOnInit() {
  }

  Upload(event) {

  }

}
