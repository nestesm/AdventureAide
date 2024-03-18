import {render} from "react-dom";
import './index.css'
import {AppRoutes} from "@app/routes";

const rootElement = document.getElementById("root");
render(<AppRoutes/>, rootElement);
