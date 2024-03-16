import * as Du from "./Components/DocumentUploadComponents";
import Data from "./staticData/Data.json";

export default function Home() {
  return (
    <div>
      <Du.Close />

      <div>
        <Du.Title text={Data.Title} />

        <div>
          <div className="Left">
            <Du.InputName />
            <Du.FileUpload />
            <Du.ElapsedCheck />
            <Du.TolerenceWindow />
          </div>
          <div className="Right">
            <Du.Split />
            <Du.Location />
            <Du.ClientRadio />
            <Du.ClientSelector />
          </div>
        </div>
        <Du.Footer />
      </div>
    </div>
  );
}
