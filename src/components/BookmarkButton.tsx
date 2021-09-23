import { useDispatch } from "react-redux";
import {
  addToBookmarks,
  removeFromBookmarks,
} from "../features/cities/citiesSlice";

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

  return <button onClick={cityBookmark}>Bookmark</button>;
}

export default BookmarkButton;
