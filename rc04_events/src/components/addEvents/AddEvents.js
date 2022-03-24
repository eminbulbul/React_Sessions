import React from "react";

const AddEvents = () => {
  function shoot(e, name) {
    alert(`Hello ${name}`);
  }
  return (
    <div>
      {/* <button onClick={shoot}>Take the Shoot</button> */}
      <button onClick={(e) => shoot(e, "jane")}>Take the Shoot</button>
    </div>
  );
};

export default AddEvents;
