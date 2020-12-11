const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      {/* <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      /> */}
      
      <div className="ui icon focus input">
        <i class="search icon"></i>
        <input type="search" placeholder="Search Robots..." onChange={searchChange}/>
      </div>
    </div>
  );
};

export default SearchBox;
