import cards from "../../api/Cards.json";

const Download = () => {
  return (
    <div className="bg-[#F7F7F9] pt-4 pb-8 container-custom">
      <div className="bg-purple-dark bg-download bg-blend-overlay bg-cover rounded-lg pt-10 pl-10 flex justify-between">
        <div className="text-center md:text-start">
          <h2 className="text-[26px] text-white font-bold">Getir'i indir!</h2>
          <p className="text-[16px] mt-3 text-white font-semibold">
            İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
          </p>
          <ul className="flex flex-col md:flex-row items-center gap-2 mt-10">
            <li>
              <a
                href="https://apps.apple.com/us/app/getir-groceries-food-beyond/id995280265"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.getir&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                href="https://appgallery.huawei.com/#/app/C100954039"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <img
        className="hidden md:flex"
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
          width={605}
          height={288}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-14">
        {cards.map((card) => {
          return (
            <div className="w-[400px] bg-white flex flex-col items-center pt-[60px] pb-10 px-4 rounded-lg">
              <img src={card.image} alt="" />
              <span className="text-purple-light font-semibold mt-6">{card.title}</span>
              <span className="text-center mt-2 text-gray-text text-[15px]">{card.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Download;
