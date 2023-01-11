class NameForm extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { value: '' };

    //binding handle
    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  // add handleChange here
  handleChange( event ) {
    this.setState( { value: event.target.value } );
    // console.log( 'The state: ', this.state.value );
  }

  // add handleSubmit here
  handleSubmit( event ) {
    alert( 'A name was submitted: ' + this.state.value );
    event.preventDefault();   //prevent new browser window from opening
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById( 'root' )
);