import {render} from "react-dom";
import './index.css'
import {ReduxProvider} from "@app/store";

const rootElement = document.getElementById("root");
render(<ReduxProvider />, rootElement);
