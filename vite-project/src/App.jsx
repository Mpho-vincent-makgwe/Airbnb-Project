
import NavBar from "../components/NavBar.jsx"
import Main from "../components/MainCon.jsx"
import Hero from "../components/Hero.jsx"
import Card from "../components/Card.jsx"
import DisplayC from "./DisplayContact.jsx"


function App() {
    return (
        <><div>
            <NavBar />
            <Hero />
            <Card />
            <Main />
            <DisplayC />
            {console.log(`Welcome`)}
        </div>
        </>
    )
}

export default App