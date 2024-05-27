import React,{useState} from "react";

function Search({searching}) {
    const [search, searchterm] = useState("");
   function handleChange(e){
    searchterm(e.target.value)
    searching(search)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Search your Recent Transactions"
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
