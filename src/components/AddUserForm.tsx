import CloseIcon from "@mui/icons-material/Close";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../data/userSlice";

const AddUserForm = ({ handleClose }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const formLoading = useSelector((state: any) => state.data.formLoading);
  const formError = useSelector((state: any) => state.data.formError);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(postData(formData));
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    handleClose();
  };

  return (
    <div className="add_user_form user_info_con">
      <div className="user_info">
        <div className="user_info_name">
          <h2>Add New User</h2>
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        {formError && (
          <p style={{ textAlign: "center", color: "red" }}>{formError}</p>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name{" "}
            <input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              required
            />
          </label>

          <label htmlFor="email">
            Email{" "}
            <input
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              required
            />
          </label>

          <label htmlFor="phone">
            Phone{" "}
            <input
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              type="tel"
              required
            />
          </label>

          <button
            type="submit"
            className="add_btn"
            style={{
              pointerEvents: formLoading ? "none" : "auto",
              opacity: formLoading ? "0.5" : "1",
            }}
          >
            <span>New user </span>
            <PersonAddAlt1Icon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
