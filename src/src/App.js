import ContainerPage from "./components/pages/ContainerPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./components/pages/index/index"



function App() {
  return (
    <div className="App">
      <ContainerPage>
          <Index/>
      </ContainerPage>
    </div>
  );
}

export default App;
