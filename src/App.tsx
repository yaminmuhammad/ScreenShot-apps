import "./App.css";
import mark from "./component/mark.jpg";

function App() {
  return (
    <div className="App" id="apz">
      <header className="App-header">
        <ul>
          <li>makan bakso</li>
          <li>makan soto</li>
          <li>makan kroto</li>
        </ul>
        <div>
          <img
            src={mark}
            alt="mark"
            width={200}
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
          recusandae! Impedit, ducimus? Non cupiditate vel consequatur delectus
          dignissimos dicta, id provident veniam dolores, a qui accusamus.
          Corrupti accusamus ratione cupiditate.
        </div>
        React Html2 Canvas
      </header>
    </div>
  );
}

export default App;
