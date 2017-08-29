import React, {Component} from 'react';

export default class ManagePetsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userId} = this.props;
    return (
      <section id="managePetsPage" className="page manage-page">
        My Pets
      </section>
    );
  }
}