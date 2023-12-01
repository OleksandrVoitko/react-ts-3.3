import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlImageGallery } from './ImageGallery.styled';

export function ImageGallery({ images }) {
  return (
    <UlImageGallery>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          modalImage={largeImageURL}
        />
      ))}
    </UlImageGallery>
  );
}
