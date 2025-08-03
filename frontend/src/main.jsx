// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import StoreContextProvider from "./context/StoreContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <StoreContextProvider>
//       <App />
//     </StoreContextProvider>
//   </BrowserRouter>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

// Tambahkan error boundary untuk debug
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Deployment Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Check console.</h1>;
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </ErrorBoundary>
);