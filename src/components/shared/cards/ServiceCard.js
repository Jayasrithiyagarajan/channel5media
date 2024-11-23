import Image from "next/image";
import serviceBgImage from "@/assets/img/service/service__1__img__bg.svg";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { id, title, desc, img, duration, youtubeLinks } = service;
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="service__single__wraper common__gradient__bg single__transform" style={{ height: "450px" }} >
        <div className="service__single__inner">
          <div className="service__img">
            <Image src={img} alt="" width={135} height={100} />
          </div>

          <div className="service__content">
            <div className="service__heading">
              <h5>
                <Link href={`/`}>{title}</Link>
              </h5>
            </div>
            <div className="service__text">
            <p style={{ fontSize: "14px"}}>{desc}</p>
            </div>


            {/* YouTube Links Section */}
            {/* <div className="service__youtube">
              <h6>OUR PLAYLISTS:</h6>
              <ul>
  {youtubeLinks.map((link, index) => (
    <li key={index} style={{ fontSize: "14px"}}>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.name}
      </a>
    </li>
  ))}
</ul>

            </div> */}
            <div className="service__icon sp_top_30" style={{marginBottom: "30px"}}>
              {/* <Link href={`/services/${id}`}> */}
              <Link href={`/`}>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
                    stroke="#0A0624"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.9902 23.0107L22.8908 11.1101"
                    stroke="#0A0624"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="service__img__bg">
          <Image src={serviceBgImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
