import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useState } from "react";
import UserTable from "./UserTable";

const UserManage = () => {
  const [user, setUser] = useState([]);

  return (
    <div>
      <DashboardHeading
        title="Users"
        desc="Manage your user"
      ></DashboardHeading>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
