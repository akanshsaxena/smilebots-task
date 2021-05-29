import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mailSelected, deleteMail } from "../mailsSlice";

export default function MailsMeta() {
  const [mails, setMails] = useState([]);
  const [prev, setPrev] = useState(null);
  const dispatch = useDispatch();
  const { selectedFolder, deletedMails } = useSelector((state) => state.mails);

  useEffect(() => {
    const getMails = async () => {
      if (selectedFolder === "deleted") {
        setMails(deletedMails);
      }
      const response = await fetch(`${selectedFolder}.json`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setMails(data);
    };
    getMails();
  }, [selectedFolder]);

  const handleMailView = (e) => {
    e.preventDefault();
    dispatch(mailSelected(e.target.id));
    e.target.className = "selected";
    if (prev != null) prev.className = "";
    setPrev(e.target);
  };
  const deletes = (mail) => {
    dispatch(deleteMail(mail));
    // const arr = mails;
    // arr.
  };
  const randomDate = (start, end, startHour, endHour) => {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    console.log(date.toString());
    return date.toString();
  };
  return (
    <>
      <div className="meta-mails-container">
        <div className="meta-mails-inner-container">
          {mails.map((mail) => {
            return (
              <div onClick={handleMailView} className="mail-meta" id={mail.mId}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 className="mail-meta-sender">{mail.sender}</h4>
                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        padding: "5px",
                        color: "blue",
                      }}
                    >
                      {randomDate(1, 20, 0, 23).split(" ")[4]}
                    </p>
                    {selectedFolder != "deleted" && (
                      <p className="delete" onClick={() => deletes(mail)}>
                        Delete
                      </p>
                    )}
                  </div>
                </div>
                <p className="mail-meta-subject">{mail.subject}</p>
                <p className="mail-meta-content">
                  {mail.content.substring(0, 70) + "..."}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
