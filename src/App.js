import Routes from "./routes";
import StoreProvier from "./context/StoreContext";

function App() {
  return (
    <>
      <StoreProvier>
        <Routes />
      </StoreProvier>
    </>
  );
}

export default App;
