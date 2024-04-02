import { useSelector } from "react-redux";
import { selectCurrentUser } from "../userSlice";
import Header from "../components/header";
const HomePage = () => {
    console.log('Home Page')
    const currentUser = useSelector(selectCurrentUser);
    return(
        <div class="home">
            <Header/> 
            <div>
                {currentUser && <h3>Welcome, {currentUser.username} Are you ready for a new adventure?</h3>}
            </div>
            <form id="search-form">
            <input type="text" class="form-control" id="search-input" placeholder="Where are you thinking of going?" />
            <button type="submit" class="btn location p-3 mt-2">Search Location</button>
            </form>
        </div>
    )
}

export default HomePage;