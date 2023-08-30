import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { tagSearched } from "../../features/filter/filterSlice";

export default function Search() {
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();
  const match = useMatch("/");
  const navigate = useNavigate();
  const handleSearch = (e) => setInput(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(tagSearched(input));
    //
    if (!match) {
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={handleSearch}
        />
      </form>
    </>
  );
}
