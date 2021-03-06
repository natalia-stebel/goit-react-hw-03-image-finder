import React, { Component } from 'react';
// import { Formik, Form } from 'formik';
import css from './searchbar.module.css';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = { q: '' };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.q.trim() === '') {
      toast.error('Empty:(  Enter request for searching', {
        position: 'top-center',
      });
      return;
    }

    this.props.onSubmit(this.state.q);
    this.setState({ q: '' });
  };

  handleChange = event => {
    this.setState({
      q: event.currentTarget.value.toLowerCase(),
    });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            {/* <span className={css.SearchFormButtonLabel}></span> */}
          </button>
          <input
            className={css.SearchForminput}
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
