import logo from "./logo.svg";
import "./App.css";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, GET_USER_BY_ID } from "./queries";
import { LOGIN_MUTATION } from "./mutations";

const App = () => {
  // const { loading, error, data } = useQuery(GET_USER_BY_ID, {
  //   variables: {
  //     id: "62843bb43450a9618fd2fa73",
  //   },
  // });
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  console.log({ data, loading, error });
  return (
    <div className="App">
      <header className="App-header">
        {loading && <img src={logo} className="App-logo" alt="logo" />}
        {error && <p>Error</p>}
        Usuários
        <ol>
          {data && data.users && data.users.map((user) => <li>{user.name}</li>)}
        </ol>
        <button
          onClick={(e) => {
            login({
              variables: { email: "maria@site.com", password: "123456" },
            });
          }}
        >
          LOGIN
        </button>
      </header>
    </div>
  );
};

export default App;
