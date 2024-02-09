import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaceIcon from "@mui/icons-material/Place";
import CloseIcon from "@mui/icons-material/Close";

const UserInfo = ({ userInfo, handleClose }: any) => {
  return (
    <section className="user_info_con">
      <div className="user_info">
        <div className="user_info_name">
          <h2>
            {userInfo.name}

            {!userInfo.favorite && <FavoriteBorderIcon />}
            {userInfo.favorite && (
              <span className="active_heart">
                <FavoriteIcon />
              </span>
            )}
          </h2>
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Main Information</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.username && (
              <tr>
                <td>username</td>
                <td>{userInfo.username}</td>
              </tr>
            )}
            {userInfo.email && (
              <tr>
                <td>email</td>
                <td>
                  <a href={"mailto:" + userInfo.email}>
                    {userInfo.email} <OpenInNewIcon />
                  </a>
                </td>
              </tr>
            )}
            {userInfo.phone && (
              <tr>
                <td>phone</td>
                <td>{userInfo.phone}</td>
              </tr>
            )}
            {userInfo.website && (
              <tr>
                <td>website</td>
                <td>{userInfo.website}</td>
              </tr>
            )}
          </tbody>
        </table>

        {userInfo.address && (
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>street</td>
                <td>{userInfo.address.street}</td>
              </tr>
              <tr>
                <td>suite</td>
                <td>{userInfo.address.suite}</td>
              </tr>
              <tr>
                <td>city</td>
                <td>{userInfo.address.city}</td>
              </tr>
              <tr>
                <td>zipcode</td>
                <td>{userInfo.address.zipcode}</td>
              </tr>
              <tr>
                <td>geo location</td>
                <td>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${userInfo.address.geo.lat},${userInfo.address.geo.lng}`}
                  >
                    View Map <PlaceIcon />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {userInfo.company !== undefined && (
          <table>
            <thead>
              <tr>
                <th colSpan={2}>company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>company name</td>
                <td>{userInfo.company.name}</td>
              </tr>
              <tr>
                <td>company catchPhrase</td>
                <td>{userInfo.company.catchPhrase}</td>
              </tr>
              <tr>
                <td>company bs</td>
                <td>{userInfo.company.bs}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default UserInfo;
