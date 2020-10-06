import {Component} from '@angular/core';

@Component({
  selector:'app-test',
  template:`<h2>This Test Component</h2>
  <hr>
  <div>
    This is a Div tag
  </div>
  <div>
    You name is {{name}}
  </div>
  `
  ,
 styles: ['h2{color:blue}']
})

export class TestComponent{
  name="Kayal";
}
