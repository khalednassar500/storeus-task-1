import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaceIcon from "@mui/icons-material/Place";
import CloseIcon from "@mui/icons-material/Close";

const UserInfo = () => {
  return (
    <section className="user_info_con">
      <div className="user_info">
        <div className="user_info_name">
          {" "}
          <h2>
            {demo.name}{" "}
            <button>
              <FavoriteBorderIcon />
            </button>
          </h2>
          <button>
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
            <tr>
              <td>username</td>
              <td>{demo.username}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>
                <a href={"mailto:" + demo.email}>
                  {demo.email} <OpenInNewIcon />
                </a>
              </td>
            </tr>
            <tr>
              <td>phone</td>
              <td>{demo.phone}</td>
            </tr>
            <tr>
              <td>website</td>
              <td>{demo.website}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>street</td>
              <td>{demo.address.street}</td>
            </tr>
            <tr>
              <td>suite</td>
              <td>{demo.address.suite}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{demo.address.city}</td>
            </tr>
            <tr>
              <td>zipcode</td>
              <td>{demo.address.zipcode}</td>
            </tr>
            <tr>
              <td>geo location</td>
              <td>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${demo.address.geo.lat},${demo.address.geo.lng}`}
                >
                  View Map <PlaceIcon />
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>company name</td>
              <td>{demo.company.name}</td>
            </tr>
            <tr>
              <td>company catchPhrase</td>
              <td>{demo.company.catchPhrase}</td>
            </tr>
            <tr>
              <td>company bs</td>
              <td>{demo.company.bs}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserInfo;

const demo = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
