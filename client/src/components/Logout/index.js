import { useHistory } from "react-router-dom";
// return to home once logged out
function Logout() {
  const history = useHistory();

  history.push("/");
  return console.log("logged out");
}

export default Logout;
