import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
 
  constructor(private sc:  ContactService,
    private toastr: ToastrService,
     public formBuilder: FormBuilder,
      private router: Router) {
    this.contactForm = this.formBuilder.group({
     
    name:['',Validators.required],
    subject: ['',Validators.required],
    message: ['',Validators.required],   
    
    })
  }

  ngOnInit(): void {
  }

  OnSubmit() {
      const CONTACT: Contact = {
       name: this.contactForm.get("name")?.value,
       subject: this.contactForm.get("subject")?.value,
       message: this.contactForm.get("message")?.value,
      }
  
  console.log(CONTACT);
      this.sc.addContact(CONTACT).subscribe(data =>{
        console.log(data);
        this.router.navigate(["/contact"]);
        this.toastr.success('Message envoyer avec succès!', 'Message Envoyer !!');
      }, error =>{
        console.log(error);
        this.contactForm.reset();
      }) 
    }
  }
