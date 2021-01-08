import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log('Lifecycles component constructor!');
  }

  componentDidMount() {
    console.log('Lifecycles componentDidMount!');
  }

  componentDidUpdate() {
    console.log('Lifecycles componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('Lifecycles componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Lifecycles shouldComponentUpdate!', nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log('Lifecycles component render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
