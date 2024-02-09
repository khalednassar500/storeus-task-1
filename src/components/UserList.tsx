import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import UserInfo from "./UserInfo";
import { useState } from "react";

import { useDispatch } from "react-redux";
import userSlice from "../data/userSlice";

const UserList = ({ data }: any) => {
  const [userInfo, setUserInfo] = useState({});
  const { handleFavorite } = userSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="user_list">
      {data.map((user: any) => (
        <div
          key={user.id}
          className="user_name activ e-user"
          onClick={() => setUserInfo(user)}
        >
          <p>{user.name}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(handleFavorite(user.id));
            }}
          >
            {!user.favorite && <FavoriteBorderIcon />}
            {user.favorite && (
              <span className="active_heart">
                <FavoriteIcon />
              </span>
            )}
          </button>
        </div>
      ))}

      {Object.keys(userInfo).length > 0 && (
        <UserInfo handleClose={() => setUserInfo({})} userInfo={userInfo} />
      )}
    </div>
  );
};

export default UserList;
