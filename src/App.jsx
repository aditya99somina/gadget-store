import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
