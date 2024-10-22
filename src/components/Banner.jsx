import BannerImage from "../assets/banner_image.png";

const Banner = () => {
  return (
    <div className="font-lexend">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${BannerImage})`,
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <div className="bg-gradient-to-b from-[#150b2b00] to-[#150B2B]"></div>
        <div className="hero-content text-white text-center">
          <div className="">
            <h1 className="mb-6 text-[52px] font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 text-lg">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="space-x-6">
              <button className="btn rounded-[50px] bg-[#0BE58A] border-none">Explore Now</button>
              <button className="btn rounded-[50px] btn-defualt bg-transparent text-white">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
