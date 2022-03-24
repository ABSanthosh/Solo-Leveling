import React from "react";
import "./Shadows.scss";
import Igris from "../../Assets/Shadows/igris.png";
import Tank from "../../Assets/Shadows/tank.png";
import Iron from "../../Assets/Shadows/Iron.png";

function Shadows(props) {
  const [activeShadow, setActiveShadow] = React.useState(2);

  const data = [
    {
      name: "Igris",
      image: Igris,
      desc: `Igris is a large knight with a light purple glow, jet-black armor covering him from head to toe, a tattered black cape, and a long red hair-like ornament extending out of the back of his helmet.`,
      abilities: [
        "Immense Strength",
        "Telekinesis",
        "Conversation",
        "Regeneration",
      ],
    },
    {
      name: "Tank",
      image: Tank,
      desc: `Tank is a shadow bear about the size of an army tank and has a light purple glow, visible scratch marks on his left eye, a thin flaming strip of hair along his head and back, and a large X-shaped scar on his chest.`,
      abilities: ["Powerful as an A-Rank", "Plow through a horde of demons"],
    },
    {
      name: "Iron",
      image: Iron,
      desc: `Iron takes after his appearance in life, wearing the same armor and wielding the same weapons. As a shadow, he also has a light purple glow. When he evolved to Elite Knight Grade, his axe became larger and gained a smoky quality to it.`,
      abilities: ["Shout of Provocation", "Regeneration"],
    },
  ];

  return (
    <div className="ShadowsWrapper">
      <nav className="ShadowsWrapper__Nav">
        <a href="/">
          {" "}
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
            ></path>
          </svg>
          Home
        </a>
      </nav>

      <main className="ShadowsWrapper__Content">
        <div className="ShadowsWrapper__Content--Bottom">
          <div className="ShadowsWrapper__Content__Left">
            <div
              className={`ShadowsWrapper__Content__Title ${
                activeShadow === 0 ? "active" : ""
              }`}
              onClick={() => {
                setActiveShadow(0);
              }}
            >
              Igris
            </div>
            <div
              className={`ShadowsWrapper__Content__Title ${
                activeShadow === 1 ? "active" : ""
              }`}
              onClick={() => {
                setActiveShadow(1);
              }}
            >
              Tank
            </div>
            <div
              className={`ShadowsWrapper__Content__Title ${
                activeShadow === 2 ? "active" : ""
              }`}
              onClick={() => {
                setActiveShadow(2);
              }}
            >
              Iron
            </div>
          </div>
          <img
            className="ShadowsWrapper__Content--image"
            src={data[activeShadow].image}
            alt={`Shadow soldier ${data[activeShadow].name}`}
          />
          <div className="ShadowsWrapper__Content__Right">
            <div className="ShadowsWrapper__Content__Right--Box">
              <div className="ShadowsWrapper__Content__Right--Box__Title">
                Biography
              </div>
              <div className="ShadowsWrapper__Content__Right--Box__Desc">
                {data[activeShadow].desc}
              </div>
            </div>

            <div className="ShadowsWrapper__Content__Right--Box">
              <div className="ShadowsWrapper__Content__Right--Box__Title">
                Abilities
              </div>
              <div className="ShadowsWrapper__Content__Right--Box__Desc">
                {data[activeShadow].abilities.map((item, index) => (
                  <div
                    key={index}
                    className="ShadowsWrapper__Content__Right--Box__Ability"
                  >
                    {item}
                  </div>
                ))}

                {/* <div className="ShadowsWrapper__Content__Right--Box__Ability">
                  Telekinesis
                </div>
                <div className="ShadowsWrapper__Content__Right--Box__Ability">
                  Conversation
                </div>
                <div className="ShadowsWrapper__Content__Right--Box__Ability">
                  Regeneration
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Shadows.propTypes = {
  // bla: PropTypes.string,
};

Shadows.defaultProps = {
  // bla: 'test',
};

export default Shadows;
