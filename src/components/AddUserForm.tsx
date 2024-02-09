import CloseIcon from "@mui/icons-material/Close";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const AddUserForm = () => {
  return (
    <div className="add_user_form user_info_con">
      <div className="user_info">
        <div className="user_info_name">
          <h2>Add New User</h2>
          <button>
            <CloseIcon />
          </button>
        </div>

        <form>
          <label htmlFor="name">
            Name <input id="name" type="text" required />
          </label>

          <label htmlFor="email">
            Email <input id="email" type="email" required />
          </label>

          <label htmlFor="phone">
            Phone <input id="phone" type="tel" required />
          </label>

          <button type="submit" className="add_btn">
            <span>New user </span>
            <PersonAddAlt1Icon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
