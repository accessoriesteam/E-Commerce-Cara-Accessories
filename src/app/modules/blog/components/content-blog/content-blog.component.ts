import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-blog',
  templateUrl: './content-blog.component.html',
  styleUrls: ['./content-blog.component.scss']
})
export class ContentBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contBlogs: any[] = [
    {
      // img: '../../../../../assets/img/blog/b1.jpg',
      img: 'https://i.ibb.co/6W1fLgD/b1.jpg',
      title: 'Tokyo Earrings',
      p: "EÉRA's 'Tokyo' earring is named after the city that inspired the brand's very first design (and just about every other piece to date). Cast from white gold, it has a diamond-studded post anchored by a sculptural silver charm with a vibrant fuchsia coating. Wear it mismatched with similar styles.",
      read: 'Continue Reading',
      date: '11/01',
    },
    {
      // img: '../../../../../assets/img/blog/b2.jpg',
      img: 'https://i.ibb.co/yByj2b5/b2.jpg',
      title: 'Thin Slake',
      p: "Comfortably lightweight and layerable, this thin gold snake chain necklace can stand on it's own or in a layered set.  16 long necklace with spring clasp, nickel and lead free Tarnish resistant.",
      read: 'Continue Reading',
      date: '08/02',
    },
    {
      // img: '../../../../../assets/img/blog/b3.jpg',
      img: 'https://i.ibb.co/NSCJbv6/b3.jpg',
      title: 'Frost Necklace',
      p: 'This asymmetrical necklace presents two exaggerated teardrops with opulent resin stones resting on the chest and clavicle. The Frost Necklace wraps around the neck with a smooth gold-plated wire and then tapers out into granulated cones that cup the stones.',
      read: 'Continue Reading',
      date: '01/03',
    },
    {
      // img: '../../../../../assets/img/blog/b4.jpg',
      img: 'https://i.ibb.co/CvGPn2L/b4.jpg',
      title: 'Earring Greece',
      p: 'Evoking ancient Greece in form & in energy. Explore our refined, one-of-a-kind collection. Adornments telling a story from an ancient tome. Browse our hand-wrought jewelry now. Hand-Selected Gemstones. Responsibly-Sourced. 22-Karat Recycled Gold.',
      read: 'Continue Reading',
      date: '16/04',
    },
    {
      // img: '../../../../../assets/img/blog/b6.jpg',
      img: 'https://i.ibb.co/P5Xbhf8/b6.jpg',
      title: 'AW20 Malaga Ring',
      p: 'Boasting a contemporary look and feel, these pieces exude a hint of luxury with their chic crisscrossed detailing. Handcrafted stainless steel.',
      read: 'Continue Reading',
      date: '12/05',
    },
  ]

}
