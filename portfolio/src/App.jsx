import "./App.css";

import Title from "./components/Title/Title";
import DisplayCard from "./components/DisplayCard/DisplayCard";

function App() {
    return (
        <>
            <Title />
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
                <DisplayCard />
            </div>
        </>
    );
}

export default App;
