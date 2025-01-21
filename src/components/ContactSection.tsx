import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const ContactSection = () => {
  const navigateWithUtm = useUtmNavigation();

  return (
    <div className="flex flex-col md:flex-row relative">
      {/* Left section - Document Request */}
      <div className="w-full md:w-1/2 bg-blue-media py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-md mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">AI活用法ダウンロード</h2>
          <p className="text-sm sm:text-[15px] font-normal text-white">
          お客様の業務を今日から変革するAI活用法です。<br />ツキ１から得られる効果を具体的にイメージしていただけます。
          </p>
          <Button 
            variant="outline" 
            className="w-full bg-white text-blue-media hover:bg-gray-100 h-[48px] sm:h-[64px] rounded-[16px] text-base sm:text-[17px]"
            onClick={() => navigateWithUtm("/download")}
          >
            AI活用法をダウンロードする
          </Button>
        </div>
      </div>

      {/* Separator */}
      <div className="hidden md:block absolute top-0 left-1/2 h-full">
        <Separator orientation="vertical" className="w-[3px] bg-white" />
      </div>

      {/* Right section - Contact */}
      <div className="w-full md:w-1/2 bg-orange py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-md mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">ご相談・お問い合わせ</h2>
          <p className="text-sm sm:text-[15px] font-normal text-white">
            ツキ１を通してお客様が得られる効果をもっと知りたい方はお気軽にお問い合わせください。
          </p>
          <Button 
            variant="outline" 
            className="w-full bg-white text-orange hover:bg-gray-100 h-[48px] sm:h-[64px] rounded-[16px] text-base sm:text-[17px]"
            onClick={() => navigateWithUtm("/contact")}
          >
            ご相談・お問い合わせする
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
