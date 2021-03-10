import React, { useState } from "react";

const AddCommentInput = ({ onSave }: any) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => onSave(value)}>Save</button>{" "}
    </>
  );
};

export default AddCommentInput;
