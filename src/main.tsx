import { createRoot } from "react-dom/client";

import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/pdf";

export const App = () => (
  <PDFViewer width={800} height={600}>
    <MyDocument />
  </PDFViewer>
);

createRoot(document.getElementById("root")!).render(<App />);
