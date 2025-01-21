import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const ServiceIntro = () => {
  const navigateWithUtm = useUtmNavigation();
  
  return (
    <div className="bg-white py-12 sm:py-0">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-xl sm:text-3xl text-[#0E3A51] font-bold mb-6">ChatGPT×Excelの活用法をプレゼント</p>
            <button 
              onClick={() => navigateWithUtm("/download")}
              className="bg-[#FF9900] text-white px-10 py-4 rounded-full text-3xl font-bold hover:bg-[#FF6600] hover:scale-120 transition-all duration-3000 animate-scale-bounce shadow-lg hover:shadow-xl"
            >
              今すぐダウンロード
            </button>
          </div>
          <div 
            onClick={() => navigateWithUtm("/download")}
            className="cursor-pointer"
          >
            <img
              src="/images/present_banner.png"
              alt="Present banner"
              className="max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueProposition = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-0">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex md:flex-row items-start md:items-center gap-8 md:gap-12 mb-8 md:mb-16">
          <div className="w-full space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] text-[#0E3A51] leading-tight font-bold">
              ツキ１とは？
            </h2>
            <p className="text-base sm:text-lg text-[#0E3A51] leading-relaxed">
              「ツキ１」は、月に1つ業務変革を起こす生成AI時代の新しいサービスです。<br />
              毎月1つのテーマに絞り、たった30日で具体的な成果を生み出します。<br />
              生成AIの特性を活かし、従来DXの "分からない、終わらない、安くない" を解決します。
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <img
            src="/images/monthly_growth.png"
            alt="AI Transformation value proposition"
            className="w-full h-auto"
          />
          <img
            src="/images/compare.png"
            alt="AI Transformation value proposition"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

const AboutService = () => {
  return (
    <>
      <ServiceIntro />
      <ValueProposition />
    </>
  );
};

export default AboutService;
