import Side from "../components/Side";
import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import Ampoule from "../components/Ampoule";
import AmpoulePage from "./AmpoulePage";

const App = () => {
  return (
    <div>
      <h1 className="text-center">TP Gestionnaire d'électricité</h1>
      <AmpoulePage />
    </div>
  );
};

export default App;
