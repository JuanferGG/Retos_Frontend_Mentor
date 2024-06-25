import "./App.css";
import { objectUser } from "./assets/userObject";
import { UserInfoComponent } from "./components/UserInfoComponent";

function App() {

  return (
    <section>
      <UserInfoComponent userInfo={objectUser} />
    </section>
  );
}

export default App;
