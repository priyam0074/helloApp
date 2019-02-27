import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
//import assd from 'bootstrap';

import { BillingAddModalComponent } from './../modal/billing-add-modal/billing-add-modal.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {


public closeResult: string;
cartItemsLen:any= 0;
cartItems:any = [];
scroller(id) {
  $(id)[0].scrollIntoView({behavior: "smooth", block: "start"});
}
   scrollTo(section) {
     var targetId = '#scroll'+ section.id;
     this.currentSection = 'scroll'+ section.id;;
     var d =   $(targetId);
     d[0].children[0].scrollIntoView({behavior: "smooth", block: "start"});
     //d[0].parentNode.scrollTop = 50;
     //d[0].scrollTo(0, 100);
  }
  toggleQuantity(quantity, index){
     quantity.show=true;
     quantity.quantity= 1;
     this.cartItems.push({id:quantity.id,item: quantity.name,
        quantity: quantity.quantity,
        price: quantity.price,
        show: quantity.show });
       
        this.cartItemsLen = this.cartItemsLen+1;
  }
  checkMinQuantity(quantity, index) {
    if(quantity.quantity === 1) {
      
      this.cartItems.splice(index,1);
      this.cartItemsLen = this.cartItemsLen-1;
    }
    else {
      quantity.quantity--;
      this.cartItems.forEach(element => {
      if(quantity.id === element.id) {
          this.cartItems[index].quantity--;
          console.log(this.cartItems[index].quantity--);
        }
        else {
             this.cartItems.splice(index,1);
        }
        
      });
      
      this.cartItemsLen = this.cartItemsLen-1;
      console.log(this.cartItemsLen);
    }
  }
  checkMaxQuantity(quantity, index) {
      quantity.quantity++;
      this.cartItems.forEach(element => {
        if(quantity.id === element.id) {
          this.cartItems[index].quantity++;
        }
        else {
        this.cartItems.push({id:quantity.id,item: quantity.name,
        qunatity: quantity.quantity,
        price: quantity.price,
        show: quantity.show });
        }
        
      });
      this.cartItemsLen = this.cartItemsLen+1;
      console.log(this.cartItemsLen);
      
  }
  allInfo(id) {
    return 'scroll'+ id;
  }
  styleCheck(index){
    var i = (index+ index+1)*30;

     return  {'transform': 'translateY(' + i + 'px)'};
  }
 
  menuDetails: any = [
    { id:1,category: "Main Course",items:[{id:10,name:'Phool Gobi Masala', description:'Home style preparation, tempered with Indian spices',price:169, quantity: 0, show: false},
    {id:11,name:'Aloo Paneer ka Sabji', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false},
    {id:12,name:'Mattar Aloo ka Sabji', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false},
    {id:13,name:'Mattar paneer ka Sabji', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false}
    ] },
    { id:2,category: "Combos",items:[{id:20,name:'Combo 1', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false},
     {id:21,name:'Combo 2', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false},
     {id:22,name:'combo 3', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259,quantity: 0, show: false},
     {id:23,name:'combo 4', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false},
     {id:24,name:'combo 5', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false}
    ]},
   { id:3,category: "Breads",items:[{id:30,name:'Pyaz Paratha ', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false},
     {id:31,name:'xyz Paratha', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false},
     {id:32,name:'Mirch Paratha', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false},
     {id:33,name:'Aloo Paratha', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false},
     {id:34,name:'Tandoori Roti', description:'Mélange of peas, and cottage cheese in smooth gravy',price:259, quantity: 0, show: false}
    ]}
];
currentSection:any = 'scroll' + this.menuDetails[0].id;
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;

  }
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(BillingAddModalComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('a');
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
   
}
