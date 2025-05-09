import "./Header.scss";
import Logo from "../../assets/logo.webp";
import Flag from "../../assets/az-flag.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="backdrop-container">
                    <div>
                        <ArrowBackIosIcon style={{color: "blue", fontSize: 20, marginLeft: 5}}/>
                    </div>
                </div>
                <div className="language-cotnainer">
                    <div>
                        <img src={Flag} alt="flag" />
                    </div>
                </div>
                <div className="location-container">
                    <LocationOnIcon />
                    <p>Baku</p>
                </div>
                <div className="logo-container">
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
                <div className="time-container">
                    <AccessTimeFilledIcon />
                    <p>09:00 - 02:00</p>
                </div>
            </nav>
        </header>
    )
}
