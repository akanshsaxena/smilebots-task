import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function MailContent() {
  const [mail, setMail] = useState([]);
  const { selectedFolder, selectedMailsId } = useSelector(
    (state) => state.mails
  );
  useEffect(() => {
    const getMails = async () => {
      const response = await fetch(`${selectedFolder}.json`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setMail(data.filter((mail) => mail.mId === selectedMailsId));
      console.log(mail);
    };
    getMails();
  }, [selectedMailsId]);

  const randomDate = (start, end, startHour, endHour) => {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    console.log(date.toString());
    return date.toString();
  };
  return (
    <div className="mail-content">
      {mail.length > 0 ? (
        <div className="mail-content-inner-container">
          <h3
            style={{ color: "black", fontWeight: "lighter", fontSize: "20px" }}
          >
            {mail[0].sender}
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="subject">
              <span style={{ fontWeight: "bold" }}>Subject: </span>{" "}
              {mail[0].subject}
            </p>
            <p style={{ color: "blue" }}>
              {randomDate(1, 20, 0, 23).split(" ")[4]}
            </p>
          </div>
          <p className="content">
            <span style={{ fontWeight: "bold" }}>Content: </span>
            {mail[0].content}
          </p>
        </div>
      ) : (
        <NoMailSelected />
      )}
    </div>
  );
}

const NoMailSelected = () => {
  return (
    <div className="no-mail-message">
      <h3>Select an email to read</h3>
    </div>
  );
};
