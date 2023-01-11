class NameForm extends React.Component {
  constructor( props ) {
    super( props );
    this.input = React.createRef();       //used to store the data into the input
  }

  handleSubmit( event ) {
    alert( 'A name was submitted: ' + this.input.current.value )
    event.preventDefault();    //prevents browser from open a new tab
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById( 'root' )
);