import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
const UsersTopInfo = ({
  dataLength,
  searchValue,
  setSearchValue,
  setToggleForm,
}: any) => {
  return (
    <div className="con_top_info">
      <p>
        Total users : <strong>{dataLength}</strong>
      </p>
      <form>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="Search by name . . ."
        />
      </form>
      <button className="add_btn" onClick={() => setToggleForm(true)}>
        <span>New user </span>
        <PersonAddAlt1Icon />
      </button>
    </div>
  );
};

export default UsersTopInfo;
