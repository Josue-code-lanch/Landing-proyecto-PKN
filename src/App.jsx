import Logo from "/fondo4.jpeg";
import "./App.css";

function App() {
  document.addEventListener("mousemove", function (event) {
    const fondo = document.querySelector("body");
    const x = (event.clientX / window.innerWidth) * 20 - 20;
    const y = (event.clientY / window.innerHeight) * 20 - 20;
    fondo.style.backgroundPosition = x + "% " + y + "%";
  });
  return (
    <>
      <div className="contain">
        <a href="#" className="logo-a">
          <img src={Logo} className="logo" alt="Logo PKN" />
        </a>
        <h1 className="title">REDES</h1>
        <div className="redes">
          <a
            className="instagram"
            href="https://www.instagram.com/el_pekine?igsh=MWdhdGFuamU5aGc0bA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCw1FhfMMMWWRLw9hie3ri7w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </a>
          <a
            href="https://music.youtube.com/channel/UCw1FhfMMMWWRLw9hie3ri7w?si=ZgbE9XEXnIIKRW2x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeMusic />
          </a>
          <a
            href="https://open.spotify.com/user/x7osyi3k7r57ybxrbdxsz5unc?si=xVp2MxJyQNCJZ1xMlTzfhQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Spotify />
          </a>
        </div>
        <p className="copyright">
          &copy;2024 PKN Oficial. Todos los derechos reservados.
        </p>
      </div>
    </>
  );
}

function Instagram() {
  return (
    <>
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          stroke="#000"
          strokeWidth="0.5"
        />
        <path
          d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
          stroke="#000"
          strokeWidth="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
          stroke="#000"
          strokeWidth="0.5"
        />
      </svg>
    </>
  );
}

function Youtube() {
  return (
    <>
      <svg
        width="50px"
        height="50px"
        viewBox="0 -3 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>youtube [#168]</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-300.000000, -7442.000000)"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                id="youtube-[#168]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

function YoutubeMusic() {
  return (
    <>
      <svg
        className="yt-music"
        width="50px"
        height="50px"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="a"
          cx="24"
          cy="24"
          r="14"
          strokeWidth="2"
          fill="none"
        />
        <path className="a" d="M31,24,19,31V17Z" strokeWidth="2" fill="none" />
        <circle
          className="a"
          cx="24"
          cy="24"
          r="21.5"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </>
  );
}

function Spotify() {
  return (
    <>
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-140.000000, -7479.000000)"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M99.915,7327.865 C96.692,7325.951 91.375,7325.775 88.297,7326.709 C87.803,7326.858 87.281,7326.58 87.131,7326.085 C86.981,7325.591 87.26,7325.069 87.754,7324.919 C91.287,7323.846 97.159,7324.053 100.87,7326.256 C101.314,7326.52 101.46,7327.094 101.196,7327.538 C100.934,7327.982 100.358,7328.129 99.915,7327.865 L99.915,7327.865 Z M99.81,7330.7 C99.584,7331.067 99.104,7331.182 98.737,7330.957 C96.05,7329.305 91.952,7328.827 88.773,7329.792 C88.36,7329.916 87.925,7329.684 87.8,7329.272 C87.676,7328.86 87.908,7328.425 88.32,7328.3 C91.951,7327.198 96.466,7327.732 99.553,7329.629 C99.92,7329.854 100.035,7330.334 99.81,7330.7 L99.81,7330.7 Z M98.586,7333.423 C98.406,7333.717 98.023,7333.81 97.729,7333.63 C95.381,7332.195 92.425,7331.871 88.944,7332.666 C88.609,7332.743 88.274,7332.533 88.198,7332.197 C88.121,7331.862 88.33,7331.528 88.667,7331.451 C92.476,7330.58 95.743,7330.955 98.379,7332.566 C98.673,7332.746 98.766,7333.129 98.586,7333.423 L98.586,7333.423 Z M94,7319 C88.477,7319 84,7323.477 84,7329 C84,7334.523 88.477,7339 94,7339 C99.523,7339 104,7334.523 104,7329 C104,7323.478 99.523,7319.001 94,7319.001 L94,7319 Z"
                id="spotify-[#162]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

export default App;
