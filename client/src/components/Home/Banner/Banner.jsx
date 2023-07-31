import './Banner.scss';
import BannerImg from '../../../assets/banner-img.png';
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Sales</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            deserunt ipsam, voluptas neque perferendis magnam nobis id sequi
            tenetur exercitationem. Ducimus officiis quis porro a nostrum
            aperiam beatae officia asperiores!
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className='banner-cta v2'>Shop Now</div>
          </div>
        </div>
        <img className='banner-img' src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
