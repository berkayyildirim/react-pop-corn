import "./Header.css";

function Header(props) {
  return (
    <header className='Header'>
      <h1>Popcorn Time!</h1>
      <p> We currently have {props.numberOfMovies} movies in our catalog </p>
    </header>
  );
}

export default Header;
