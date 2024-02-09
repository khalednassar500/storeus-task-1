import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import UserList from "./UserList";
import UserInfo from "./UserInfo";
import AddUserForm from "./AddUserForm";

const UserContainer = () => {
  return (
    <section className="user_con">
      <div className="con_top_info">
        <p>
          Total users : <strong>200</strong>
        </p>
        <form>
          <input type="search" placeholder="Search by name . . ." />
        </form>
        <button className="add_btn">
          <span>New user </span>
          <PersonAddAlt1Icon />
        </button>
      </div>
      <section className="user_con_main">
        <UserList />
        {/* <UserInfo /> */}
      </section>

      {/* <AddUserForm /> */}
    </section>
  );
};

export default UserContainer;
