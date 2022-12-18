import "./searchFeature.css";
import BackDrop from "./backdrop";
const SearchFeature = (props) => {
  return (
    <div className="search-container">
      <BackDrop onCloseLayer={props.closeSearchBar} />
      <form action="#" className="search-feature">
        <input type="text" placeholder="Search your item!" />
        <button onClick={props.closeSearchBar} className="submit-btn">
          <span className="material-icons-outlined">search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchFeature;
