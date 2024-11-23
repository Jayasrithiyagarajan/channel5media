import Link from "next/link";
import ItemMobile from "./ItemMobile";
import { useHeaderContex } from "@/providers/HeaderContex";

const NavbarMobile = () => {
  // Simpler menu items for mobile view
  const mobileItems = [
    {
      name: "About Us",
      toggler: false,
      path: "#about__mission__area",
      dropdown: null,
    },
    {
      name: "Channels",
      toggler: false,
      path: "#channels__area",
      dropdown: null,
    },
    {
      name: "Featured Content",
      toggler: false,
      path: "#featured__content__area",
      dropdown: null,
    },
    {
      name: "Contact",
      toggler: false,
      path: "#tb__contact",
      dropdown: null,
    },
  ];

  return (
    <nav className="offcanvas__menu">
      <ul className="offcanvas__menu_ul">
        {mobileItems?.map((item, idx) =>
          !item?.name ? null : <ItemMobile key={idx} item={item} />
        )}
      </ul>
      <div className="offcanvas__account--items">
        <Link
          className="offcanvas__account--items__btn d-flex align-items-center"
          href="/login"
        >
          <span className="offcanvas__account--items__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.51"
              height="19.443"
              viewBox="0 0 512 512"
            >
              <path
                d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
          </span>
          <span className="offcanvas__account--items__label">
            Login / Register
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarMobile;
