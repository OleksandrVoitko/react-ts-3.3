import { Component } from 'react';
import {
  ButtonSearchForm,
  FormSearchForm,
  HeaderSearchbar,
  Input,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.handleSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <HeaderSearchbar>
        <FormSearchForm onSubmit={this.onSubmit}>
          <ButtonSearchForm type="submit">
            <ImSearch
              style={{ width: 20, height: 20, marginLeft: 4, marginTop: 4 }}
            />
          </ButtonSearchForm>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </FormSearchForm>
      </HeaderSearchbar>
    );
  }
}
