import "./App.css";

import Title from "./components/Title/Title";
import DisplayCard from "./components/DisplayCard/DisplayCard";

function App() {
    return (
        <>
            <Title />
            <div className="grid grid-cols-3 gap-8 py-20 px-8 items-center justify-center bg-white dark:bg-black w-full mx-auto">
                <DisplayCard title={"Señaventura"} />
                <DisplayCard title={"D.R.E.A.M. Lab"} />
                <DisplayCard />
                <DisplayCard />
            </div>
        </>
    );
}

export default App;
