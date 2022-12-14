import "./searchBar.css";

function SearchBar() {
  return (
    <form className="search-bar" action="#">
      <span>All Categories</span>
      <input type="text" placeholder="What are you looking for!" />
      <button className="search-btn">
        <span className="material-icons-outlined">search</span>
      </button>
    </form>
  );
}
export default SearchBar;
