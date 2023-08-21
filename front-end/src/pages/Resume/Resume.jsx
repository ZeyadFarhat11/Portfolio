import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./resume.scss";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../assets/resume.pdf";
import { Container } from "react-bootstrap";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  return (
    <main id="resume">
      <a href={resume} className="main-button">
        <FontAwesomeIcon icon={faDownload} />
        Download Resume
      </a>
      <Container>
        <Document
          file={resume}
          className={"d-flex justify-content-center gap-2 flex-column"}
        >
          <Page pageNumber={1} scale={window.innerWidth > 786 ? 1.7 : 0.6} />
          <Page pageNumber={2} scale={window.innerWidth > 786 ? 1.7 : 0.6} />
        </Document>
      </Container>
      <a href={resume} className="main-button">
        <FontAwesomeIcon icon={faDownload} />
        Download Resume
      </a>
    </main>
  );
}
