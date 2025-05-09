import "./SloganSection.scss";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function SloganSection() {
    return (
        <section className="slogan-section">
            <div className="slogan-container">
                <h1>
                    Salford & Co
                </h1>
                <p>Nomre 1 restorant</p>
            </div>
            <div className="social-media-container">
                <div>
                    <InstagramIcon style={{color: "#fff", fontSize: 25}}/>
                </div>
                <div>
                    <WhatsAppIcon style={{color: "#fff", fontSize: 25}}/>
                </div>
                <div>
                    <LocalPhoneIcon style={{color: "#fff", fontSize: 25}}/>
                </div>
            </div>
        </section>
    )
}
