import Alert from "./components/Alert";
import { data } from "./data/dummy.js";
function App() {
  return (
    <div className="body">
      <div className="container">
        {data.map((alert, idx) => (
          <Alert
            key={idx}
            type={alert.type}
            icon={alert.icon}
            title={alert.title}
            desc={alert.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
