import UserList from "./UserList";
import AddUserForm from "./AddUserForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../data/userSlice";
import Loading from "../loading.svg";
import UsersTopInfo from "./UsersTopInfo";

const UserContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [toggleForm, setToggleForm] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.data);
  const loading = useSelector((state: any) => state.data.loading);
  const error = useSelector((state: any) => state.data.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading || !data.length) {
    return (
      <div className="loading user_con">
        <img src={Loading} alt="loading animation" />
      </div>
    );
  }
  if (error) {
    return <div className="loading user_con">Error: {error}</div>;
  }

  const filterdData = searchValue
    ? data.filter((user: any) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : data;

  return (
    <section className="user_con">
      <UsersTopInfo
        dataLength={data.length}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setToggleForm={setToggleForm}
      />

      <section className="user_con_main">
        <UserList data={filterdData} />

        {filterdData.length === 0 && (
          <p className="no_results">No results found</p>
        )}
      </section>

      {toggleForm && <AddUserForm handleClose={() => setToggleForm(false)} />}
    </section>
  );
};

export default UserContainer;
