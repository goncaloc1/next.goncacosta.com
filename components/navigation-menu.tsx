import Link from "next/link";

type NavigationMenuProps = {
  bookUrl?: string;
  bookHref?: string;
  backHref?: string;
};

const NavigationMenu = ({
  bookUrl,
  bookHref,
  backHref,
}: NavigationMenuProps) => {
  return (
    <>
      <ul>
        <li>
          <Link legacyBehavior href={backHref ? backHref : "/"}>
            <a id="back">
              <span>back</span>
            </a>
          </Link>
        </li>
        <li>
          <a id="fullscreen">
            <span>fullscreen</span>
          </a>
        </li>
        <li>
          <a id="exit_fullscreen">
            <span>exit fullscreen</span>
          </a>
        </li>
        {bookUrl && (
          <li>
            <a id="read_book" href={bookUrl} target="_blank" rel="noreferrer">
              <span>book</span>
            </a>
          </li>
        )}
        {bookHref && (
          <li>
            <Link legacyBehavior href={bookHref}>
              <a id="read_book">
                <span>book</span>
              </a>
            </Link>
          </li>
        )}
      </ul>

      <style jsx>{`
        html:-moz-full-screen {
          background: #fff;
        }

        ul {
          margin: 20px 0 0 20px;
        }

        ul li {
          list-style: none;
        }

        ul span {
          color: #bbb;
          visibility: hidden;
          padding: 0 0 0 30px;
          position: absolute;
          text-transform: uppercase;
          line-height: 20px;
          white-space: nowrap;
          opacity: 0;
        }

        ul a {
          background-image: url(./icons.png);
          background-repeat: no-repeat;
          height: 20px;
          width: 20px;
          margin: 0 0 15px 0;
          display: block;
          position: relative;
          opacity: 1;
          cursor: pointer;
        }

        ul a {
          transition: opacity 0.25s ease-in-out;
          -moz-transition: opacity 0.25s ease-in-out;
          -webkit-transition: opacity 0.25s ease-in-out;
        }

        ul span {
          transition: visibility 0.25s ease-in-out, opacity 0.25s ease-in-out;
          -moz-transition: visibility 0.25s ease-in-out,
            opacity 0.25s ease-in-out;
          -webkit-transition: visibility 0.25s ease-in-out,
            opacity 0.25s ease-in-out;
        }

        ul a:hover span {
          visibility: visible;
          opacity: 1;
        }
        ul a:hover {
          opacity: 0.6;
        }
        ul #back {
          background-position: 0 -92px;
        }
        ul #fullscreen {
          background-position: 0 -152px;
          display: none;
        }
        ul #exit_fullscreen {
          background-position: 0 -182px;
          display: none;
        }
        ul #read_book {
          background-position: 0 -122px;
        }
      `}</style>
    </>
  );
};

export default NavigationMenu;
