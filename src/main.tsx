import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/pdf";
import "typeface-roboto";

export const App = () => (
  <PDFViewer width={800} height={600}>
    <MyDocument />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById("root"));
