import React from "react";
import Folder from "./components/Folders";
import MailsMeta from "./components/MailsMeta";
import MailsContent from "./components/MailContent";
function App() {
  return (
    <div className="container">
      <Folder />
      <MailsMeta />
      <MailsContent />
    </div>
  );
}

export default App;
