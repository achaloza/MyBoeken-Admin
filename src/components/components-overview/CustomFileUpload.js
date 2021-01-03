import React from "react";

const CustomFileUpload = (props) => (
  <div className="custom-file mb-3">
    <input type="file" className="custom-file-input" id="customFile2" onChange={props.onChange} />
    <label className="custom-file-label" htmlFor="customFile2">
      Choose file...
    </label>
  </div>
);

export default CustomFileUpload;
