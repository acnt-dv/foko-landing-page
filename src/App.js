import './App.css';
import Login from "./componenets/Login";
import Footer from "./componenets/Footer";

function App() {
    return (
        <div className="App">
            <div className="flex flex-col items-center justify-center h-screen bg-foko">
                <Login/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
