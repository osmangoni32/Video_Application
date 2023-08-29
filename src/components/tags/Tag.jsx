import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

export default function Tag({ title }) {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filter);
  const isSelected = tags.includes(title) ? true : false;
  //console.log(isSelected);
  const handleSelected = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    }
    if (!isSelected) {
      dispatch(tagSelected(title));
    }
  };
  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <div className={style} onClick={handleSelected}>
      {title}
    </div>
  );
}

{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
    redux
  </div> */
}
