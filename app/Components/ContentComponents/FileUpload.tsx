import React, { useState } from "react";
import PropTypes from "prop-types";
import Data from "../../staticData/Data.json";
import Image from "next/image";
import "./fileUpload.css";

interface FileUploadProps {}

const FileUpload: React.FC<FileUploadProps> = (props) => {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    setFileName(droppedFile.name);
  };

  const handleFileDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3 className="bold text">{Data["title-section-1"]}</h3>
      <div
        className="round-corner round-corner-grid"
        onDrop={handleFileDrop}
        onDragOver={handleFileDragOver}
      >
        <div className="bg round-corner-grid-2">
          <Image
            className=""
            src="./Drag and Drop Icon.svg"
            height="39"
            width="39"
            alt="upload"
          ></Image>
          <span className="text">
            <span>Drag And Drop Or</span>
            <span className="bold-text"> Browse</span>
          </span>
        </div>

        <div className="center-button round-corner-grid-1 t-b-image-pad">
          <Image
            src="./BUTTON Primary.svg"
            height="39"
            width="202"
            alt="upload"
          ></Image>
        </div>
      </div>
      <div className="uploadProgress">
        <div className="uploadProgress-child">
          <Image
            alt="upload file icon"
            height="24"
            width="24"
            src={"./Upload Icon.svg"}
          ></Image>
        </div>
        <div className="uploadProgress-child2">
          <span className="text text-light">{fileName}</span>
        </div>
        <div className="uploadProgress-child4">
          <span className="text text-light">{Data.bitsDownloaded}</span>
        </div>
        <div className="uploadProgress-child3">
          <progress id="progressBar" value="10" max="100"></progress>
        </div>
      </div>
    </div>
  );
};

FileUpload.propTypes = {};

export default FileUpload;
