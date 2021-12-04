import "./App.css";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import reportPdf from "./3_Report.pdf";

function App() {
  const correctPassword = "btn710@G#";
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setPasswordCorrect] = useState(true);
  const [numPages, setNumPages] = useState(0);

  const checkPassword = () => {
    setPasswordCorrect(correctPassword === password);
  };
  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <div className="App">
      {isPasswordCorrect ? (
        <div style={{ width: "100%", margin: "0 auto" }}>
          <a style={{paddingTop: '10vh'}} href="https://web.microsoftstream.com/video/dd53362c-0f5b-4fc8-b92d-4dfb6a2b884c">Link to video</a>
            <Document
              file={reportPdf}
              onLoadSuccess={onLoadSuccess}
              options={{ workerSrc: "/pdf.worker.js" }}
              style={{textAlign: 'center', width: '100%'}}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page style={{width: '100%'}}key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
      ) : (
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button onClick={checkPassword}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;
