import { Component } from 'react';
import { getPhotos } from 'serveses/getPhotos';
import { DivApp } from './App.styled';
import { ErrorCard } from './ErrorCard/ErrorCard';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    isLoading: false,
    isError: false,
  };

  componentDidUpdate(prevProps, { searchQuery, page }) {
    if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
      this.imageSearch();
    }
  }

  handleSearch = searchQuery => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({ searchQuery, page: 1, images: [] });
    }
  };

  toggleIsLoading = () => {
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }));
  };
  toggleIsError = () => {
    this.setState(({ isError }) => ({
      isError: !isError,
    }));
  };

  imageSearch = async () => {
    const { searchQuery, page } = this.state;
    this.toggleIsLoading();
    try {
      const data = await getPhotos(searchQuery, page);

      this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
    } catch (error) {
      console.log(error);
      this.toggleIsError();
      setTimeout(() => {
        this.toggleIsError();
      }, 3000);
    } finally {
      this.toggleIsLoading();
    }
  };

  render() {
    const { searchQuery, page, images, isLoading, isError } = this.state;
    return (
      <DivApp>
        <Searchbar handleSearch={this.handleSearch} />
        {isLoading && <Loader />}
        {isError && <ErrorCard>Unable to display photos!</ErrorCard>}
        {images.length > 0 && <ImageGallery images={images} />}
      </DivApp>
    );
  }
}
