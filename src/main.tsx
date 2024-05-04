import { ThemeProvider } from "@/app/context/ThemeProvider.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import App from "./app/App.tsx";
import "./app/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RecoilRoot>
        <Router>
          <App />
          <ToastContainer
            position="top-right"
            className="text-xs p-0 h-10"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  </>
);
