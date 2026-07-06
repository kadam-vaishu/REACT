import React from "react";

const UserCard = React.memo(({ user }) => {
  console.log("Rendering:", user.name);

  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.company.name}</p>
    </div>
  );
});

export default UserCard;