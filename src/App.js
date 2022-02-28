import GlobalStyle from "./Styles/GlobalStyle";
import Routes from "./Routes";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <ToastContainer
        theme="dark"
        autoClose='500'
      />
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
