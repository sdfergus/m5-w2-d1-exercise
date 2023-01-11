class FileInput extends React.Component {
  constructor( props ) {

    super( props );
    this.fileInput = React.createRef();
  }
  handleSubmit = ( event ) => {
    event.preventDefault();
    alert( `Selected file -
    ${ this.fileInput.current.files[ 0 ].name }` );
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Upload file:</label>
        <input type="file" ref={this.fileInput} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <FileInput />,
  document.getElementById( 'root' )
);