

// components
import DataProvider from "./Context/Dataprovider";
import Home from "./components/Home";

function App() {
  return (
  <>
  <DataProvider>
    <Home />
    </DataProvider>
  </>
   
  );
}

export default App;
