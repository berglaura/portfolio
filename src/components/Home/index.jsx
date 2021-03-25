import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Moikka,</p>
                    <p>olen Laura.</p>
                    <p>Tavoitteeni on oppia taitavaksi devaajaksi.</p>
                </h1>
                <Link to="/about">
                    <button>Lisätietoja</button>
                </Link>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/laura3.jpg`} alt="henkilökuva"/>
            </div>
        </div>
    );
};

export default Home;
