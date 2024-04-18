import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{
  visible: boolean = false;

ngOnInit(): void {}

useForm = this.fb.group({
  name: ['', Validators.required],
  pword: ['',Validators.required],
});

  constructor(
    private fb:FormBuilder,
  ){};

  addUser(){
    console.log(this.useForm.value);
  }
  showDialog() {
    this.visible = true;
}
  };

