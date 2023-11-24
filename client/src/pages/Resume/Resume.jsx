import { FaDownload } from "react-icons/fa";
import "./resume.scss";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../assets/resume-flatten.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  return (
    <main id="resume">
      <a href={resume} target="_blank" className="main-button">
        <FaDownload />
        Download Resume
      </a>
      <div className="container">
        <Document
          file={resume}
          className={"d-flex justify-content-center gap-2 flex-column"}
        >
          <Page pageNumber={1} size="A4" />
        </Document>
      </div>
      <a href={resume} target="_blank" className="main-button">
        <FaDownload />
        Download Resume
      </a>
    </main>
  );
}
