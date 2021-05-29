import React, { useState } from "react";
import MailsMeta from "./MailsMeta";

import { useDispatch } from "react-redux";
import { folderSelected } from "../mailsSlice";

export default function Folder() {
  const dispatch = useDispatch();
  const [prev, setPrev] = useState(null);
  const switchFolder = (e) => {
    e.preventDefault();
    let str = e.target.textContent.toLowerCase();
    e.target.className = "folder-name selected";
    if (prev != null) prev.className = "folder-name";
    setPrev(e.target);
    dispatch(folderSelected(str));
  };
  return (
    <>
      <div className="folder">
        <h3>Folders</h3>
        <div className="folder-container">
          <p className="folder-name selected" onClick={switchFolder}>
            Inbox
          </p>
          <p className="folder-name" onClick={switchFolder}>
            Spam
          </p>
          <p className="folder-name" onClick={switchFolder}>
            Deleted
          </p>
        </div>
      </div>
    </>
  );
}
