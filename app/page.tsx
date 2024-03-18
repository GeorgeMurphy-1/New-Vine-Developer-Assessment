import * as Du from "./Components/DocumentUploadComponents";
import Data from "./staticData/Data.json";
import "./page.css";
import BrowseFilesAction from "./helperFunctions/BrowseFilesAction";
import CloseAction from "./helperFunctions/CloseAction";
import ContinueAction from "./helperFunctions/ContinueAction";
import DragAndDropAction from "./helperFunctions/DragAndDropAction";
import UploadFileAction from "./helperFunctions/UploadFileAction";

import Image from "next/image";

export default function Home() {
  BrowseFilesAction;
  CloseAction;
  ContinueAction;
  DragAndDropAction;
  UploadFileAction;

  const isopen: boolean = true;
  const isUploading: boolean = false;
  const splitSchedule: boolean = false;
  const elapsedDates: string[] | undefined = undefined;
  let fileToUpload: File;
  // const UploadPercent: number = undefined;
  // const importName: number = undefined;
  // const tolerence: number = undefined;
  // const selectedclient: number = undefined;

  return (
    <>
      <div className="background"></div>

      <div className="container popup-container">
        <div className="close-area">
          <Du.Close />
        </div>

        <div className=" title-area centered">
          <Du.Title text={Data.Title} />
          <Image
            height="3"
            width="285"
            alt="seperator"
            src={"./Horizontal Bar.svg"}
          />
        </div>

        <div className="left-area ">
          <div className="left-container">
            <div className="left-contianed-p1">
              <Du.InputName />

              <Image
                height="3"
                width="285"
                alt="seperator"
                src={"./Horizontal Bar.svg"}
              />
            </div>
            <div className="left-contained-p2">
              <Du.FileUpload />
            </div>
            <div className="left-contained-p3">
              <Du.ElapsedCheck elapsedDates={elapsedDates} />
              <Image
                height="3"
                width="285"
                alt="seperator"
                src={"./Horizontal Bar.svg"}
              />
            </div>
            <div className="left-contained-p4">
              <Du.TolerenceWindow />
            </div>
          </div>
        </div>
        <div className="right-area">
          <div className="right-container">
            <div className="right-contained-1">
              <Du.Split />
            </div>
            <div className="right-contained-2">
              <Du.Location />
            </div>
            <div className="right-contained-3">
              <Du.ClientRadio />
            </div>
            <div className="right-contained-4">
              <Du.ClientSelector />
            </div>
          </div>
        </div>
        <div className="footer-area centered">
          <Du.Footer />
        </div>
      </div>
    </>
  );
}
