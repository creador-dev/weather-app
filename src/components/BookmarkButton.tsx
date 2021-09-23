/* eslint-disable react/style-prop-object */
import { useDispatch } from "react-redux";
import {
  addToBookmarks,
  removeFromBookmarks,
} from "../features/cities/citiesSlice";
import BookmarkIcon from "../icons/BookmarkIcon";

interface bookmarkSchema {
  bookmarked: Boolean;
  cityId: number;
}

function BookmarkButton({ bookmarked, cityId }: bookmarkSchema) {
  const dispatch = useDispatch();

  const cityBookmark = () => {
    if (bookmarked) {
      dispatch(removeFromBookmarks(cityId));
    } else {
      dispatch(addToBookmarks(cityId));
    }
  };

  return (
    <button
      className={bookmarked ? "p-2.5 active" : "p-2.5"}
      onClick={cityBookmark}
      aria-label="Bookmark"
    >
      <BookmarkIcon />
    </button>
  );
}

export default BookmarkButton;
