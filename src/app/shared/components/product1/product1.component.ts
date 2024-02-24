import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DetailsProductComponent } from 'src/app/modules/shop/components/details-product/details-product.component';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component {
  @ViewChildren('add') add!: QueryList<any>;
  @Input() public setStorage!: DetailsProductComponent;
  @Input() start!:number;
  @Input() end!:number;
  product!:any;
  titleProd!:any;
  priceProd!:any;
  imgSrc!:any;
  quantity!: number;
  constructor(private router: Router, private dataService: DataService) {
  }

  // Add Products to Cart
  addProduct(event: any) {
    var addProd = event.target;
    // Show Quantity
    this.add.forEach((items:any) => {
        // items.nativeElement.classList.remove("hidden");
        // items.nativeElement.previousSibling.classList.remove("flex");
        // items.nativeElement.previousSibling.classList.add("hidden");
    });
    addProd.parentElement.classList.add("hidden");
    addProd.parentElement.previousSibling.classList.remove("hidden")
    addProd.parentElement.previousSibling.classList.add("flex")
    addProd.parentElement.previousSibling.firstChild.nextSibling.value = 1;
    // add product to Cart
    var shopProd = addProd.parentElement.parentElement;
    this.imgSrc = shopProd.firstChild.src;
    this.titleProd = shopProd.firstChild.nextSibling.firstChild.nextSibling.innerText;
    this.priceProd = shopProd.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerText;
    this.quantity = shopProd.lastChild.previousSibling.firstChild.nextSibling.value;
    this.product = {
      title: this.titleProd,
      price: this.priceProd,
      img: this.imgSrc,
      quantity: Number(this.quantity),
      total: parseFloat(this.priceProd.replace("$", "")) * this.quantity,
    }
    console.log(this.product)
    // Delete Old same Product.
    for (let i = 0; i < this.dataService.cartItemList.length; i++) {
      if (this.product.title == this.dataService.cartItemList[i].title) {
        this.dataService.removeCartItem(this.product);
      }
    }
    // Add to Cart
    this.dataService.addCart(this.product);
  }
  // Open Page Details Products
  detailsProd(event:any) {
    var detailsProd = event.target;
    this.imgSrc = detailsProd.src;
    this.titleProd = detailsProd.nextSibling.firstChild.nextSibling.innerText;
    this.priceProd = detailsProd.nextSibling.lastChild.innerText;
    window.localStorage.setItem("Product Title", this.titleProd);
    window.localStorage.setItem("Product Price", this.priceProd);
    window.localStorage.setItem("Product Img", this.imgSrc);
    // router to Page Details Products
    if (window.location.pathname != 'shop/product-details') {
      this.router.navigate(['shop/product-details']);
    }
    // set Products localStorage
    if (window.location.pathname == 'shop/product-details') {
      this.setStorage.ngOnInit();
    }
    // scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  // Counter Up & Down
  downCounter(event:any) {
  var down = event.target;
  down.nextSibling.value--;
  this.product.quantity--;
  // Delete Old same Product.
  for (let i = 0; i < this.dataService.cartItemList.length; i++) {
    if (this.product.title == this.dataService.cartItemList[i].title) {
      this.dataService.removeCartItem(this.product);
    }
  }
  // Add to Cart
  this.product.total = parseFloat(this.priceProd.replace("$", "")) * this.product.quantity;
  this.dataService.addCart(this.product);
  if (isNaN(down.nextSibling.value) || down.nextSibling.value <= 0) {
    down.nextSibling.value = 0;
    // this.product.quantity = 1;
    down.parentElement.nextSibling.classList.remove("hidden");
    down.parentElement.classList.remove("flex")
    down.parentElement.classList.add("hidden")
    this.dataService.removeCartItem(this.product);
  }
  }
  upCounter(event:any) {
  var up = event.target;
  up.previousSibling.value++;
  this.product.quantity++;
  // Delete Old same Product.
  for (let i = 0; i < this.dataService.cartItemList.length; i++) {
    if (this.product.title == this.dataService.cartItemList[i].title) {
      this.dataService.removeCartItem(this.product);
    }
  }
  // Add to Cart
  this.product.total = parseFloat(this.priceProd.replace("$", "")) * this.product.quantity;
  this.dataService.addCart(this.product);
  }
  // Products
  products: any[] = [
    {
      id: 1,
      // img: '../../../../assets/img/products/f1.jpg',
      img: 'https://i.ibb.co/x3N8fC4/f1.jpg',
      mark: 'cara',
      title: 'Balloon letter Necklace',
      price: '70',
    },
    {
      id: 2,
      // img: '../../../../assets/img/products/f2.jpg',
      img: 'https://i.ibb.co/hXhf5yv/f2.jpg',
      mark: 'cara',
      title: 'Chunky Heart',
      price: '70',
    },
    {
      id: 3,
      // img: '../../../../assets/img/products/f3.jpg',
      img: 'https://i.ibb.co/LgsBH39/f3.jpg',
      mark: 'cara',
      title: 'Rosie',
      price: '70',
    },
    {
      id: 4,
      // img: '../../../../assets/img/products/f4.jpg',
      img: 'https://i.ibb.co/zVJ5fcH/f4.jpg',
      mark: 'cara',
      title: 'Mini Shell',
      price: '70',
    },
    {
      id: 5,
      // img: '../../../../assets/img/products/f5.jpg',
      img: 'https://i.ibb.co/RNBMzNR/f5.jpg',
      mark: 'cara',
      title: 'LOTUS',
      price: '70',
    },
    {
      id: 6,
      // img: '../../../../assets/img/products/f6.jpg',
      img: 'https://i.ibb.co/2vYMWSk/f6.jpg',
      mark: 'cara',
      title: 'Fudge Ring',
      price: '120',
    },
    {
      id: 7,
      // img: '../../../../assets/img/products/f7.jpg',
      img: 'https://i.ibb.co/ySTy8nh/f7.jpg',
      mark: 'cara',
      title: 'Pommery',
      price: '80',
    },
    {
      id: 8,
      // img: '../../../../assets/img/products/f8.jpg',
      img: 'https://i.ibb.co/q7QGZqT/f8.jpg',
      mark: 'cara',
      title: 'Clover',
      price: '60',
    },
    {
      id: 9,
      // img: '../../../../assets/img/products/n1.jpg',
      img: 'https://i.ibb.co/vxKqdPK/n1.jpg',
      mark: 'cara',
      title: 'Mi-Heart',
      price: '75',
    },
    {
      id: 10,
      // img: '../../../../assets/img/products/n2.jpg',
      img: 'https://i.ibb.co/R6tz8CK/n2.jpg',
      mark: 'cara',
      title: 'Natshi',
      price: '75',
    },
    {
      id: 11,
      // img: '../../../../assets/img/products/n3.jpg',
      img: 'https://i.ibb.co/dky69Wr/n3.jpg',
      mark: 'cara',
      title: 'Sunflower',
      price: '75',
    },
    {
      id: 12,
      // img: '../../../../assets/img/products/n4.jpg',
      img: 'https://i.ibb.co/GHk9ZT7/n4.jpg',
      mark: 'cara',
      title: 'HeartBear',
      price: '70',
    },
    {
      id: 13,
      // img: '../../../../assets/img/products/n5.jpg',
      img: 'https://i.ibb.co/dJsL177/n5.jpg',
      mark: 'cara',
      title: 'Mia',
      price: '75',
    },
    {
      id: 14,
      // img: '../../../../assets/img/products/n6.jpg',
      img: 'https://i.ibb.co/FnxL40f/n6.jpg',
      mark: 'cara',
      title: 'Luckie',
      price: '85',
    },
    {
      id: 15,
      // img: '../../../../assets/img/products/n7.jpg',
      img: 'https://i.ibb.co/cNZH4Gp/n7.jpg',
      mark: 'cara',
      title: 'Butterflies',
      price: '80',
    },
    {
      id: 16,
      // img: '../../../../assets/img/products/n8.jpg',
      img: 'https://i.ibb.co/Y2RFtHv/n8.jpg',
      mark: 'cara',
      title: 'XIE',
      price: '72',
    },
  ]
  // Loop Stars
  starLoop(n: number): Array<number> {
    return Array(n);
  }
}


