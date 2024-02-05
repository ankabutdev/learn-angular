import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Product } from './product';
import { ProductService } from './productservice';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, CommonModule, TagModule, ButtonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  title = 'GFG';

  images: any[] = [
    {
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      alt: 'Cascading Style Sheet',
      title: 'CSS'
    },
    {
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      alt: 'Angular for Front end',
      title: 'Angular'
    },
    {
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
      alt: 'Java Programming Language',
      title: 'Java'
    },
    {
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
      alt: 'HyperText Markup Language',
      title: 'HTML'
    },
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    }
  ]
}
