import Image from "next/image";
import Link from "next/link";
import logoImage1 from "@/assets/img/logo/Logo_1.png";
import logoImage2 from "@/assets/img/logo/Logo_2.png";
import logoImage3 from "@/assets/img/logo/project_1.png";

const LogoMobile = () => {
  return (
    <div className="offcanvas__logo">
      <Link className="offcanvas__logo_link" href="/">
        <Image src={logoImage3} alt="Logo-img" className="logo-image3" height={50} width={50}/>
        {/* <Image src={logoImage3} alt="Logo-img3" className="logo-image2" /> */}
      </Link>
      <button className="offcanvas__close--btn" data-offcanvas>
        Close
      </button>
    </div>
  );
};

export default LogoMobile;
