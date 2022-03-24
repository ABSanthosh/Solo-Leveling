import Header from "../../Components/Header/Header";
import "./Home.scss";
import Logo from "../../Assets/logo.png";

export default function Home() {
  return (
    <div className="HomeWrapper">
      <Header />
      <div className="HomeWrapper__Content">
        <img
          className="HomeWrapper__Content--logo"
          src={Logo}
          alt="Game Logo"
        />
        {/* <article className="HomeWrapper__Content--description">
          Twenty-year-old Sung Jin-Woo is one such Hunter, but he is known as
          the "World's Weakest," owing to his pathetic power compared to even a
          measly E-Rank. Still, he hunts monsters tirelessly in low-rank Gates
          to pay for his mother's medical bills. However, this miserable
          lifestyle changes when Jin-Woo—believing himself to be the only one
          left to die in a mission gone terribly wrong—awakens in a hospital
          three days later to find a mysterious screen floating in front of him.
        </article> */}
      </div>
    </div>
  );
}
