import { Button } from "./ui/button";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const ValueProposition = () => {
  const navigateWithUtm = useUtmNavigation();
  return (
    <div className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex md:flex-row items-start md:items-center gap-8 md:gap-12 mb-8 md:mb-16">
          <div className="w-full space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] text-[#0E3A51] leading-tight font-bold">
              私たちが提供するのは「安心感のある変革」です
            </h2>
            <p className="text-base sm:text-lg text-[#0E3A51] leading-relaxed">
              毎月着実に効果が出る、小さな成功を積み重ねていくという<span className="text-primary font-bold">安心感</span>。<br />  
              生成AIにしかできない、小さな労力で大きな成果を生み出す<span className="text-primary font-bold">変革</span>。<br />  
              <br />
              大きな変革は不安。でも小さな改善なら心地いい。その効果が大きいならもっと心地いい。<br />
              それがツキ１の革新的な価値です。
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => navigateWithUtm("/message")}
            className="bg-white hover:bg-primary/5 text-primary border-2 border-primary rounded-[50px] h-[40px] px-8 text-base"
          >
            詳しく見る
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
