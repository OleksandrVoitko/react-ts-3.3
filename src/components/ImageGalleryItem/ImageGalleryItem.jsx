import { Component } from 'react';
import { ImgGalleryItem, LiGalleryItem } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ src, modalImage }) {
  return (
    <LiGalleryItem>
      <ImgGalleryItem src={src} />
    </LiGalleryItem>
  );
}
