import { Button } from "@/components/ui/button";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const DownloadBanner = () => {
  const navigateWithUtm = useUtmNavigation();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-4">
      <div className="text-center">
        <p className="text-xl sm:text-3xl text-[#0E3A51] font-bold mb-6">ChatGPT×Excelの活用法をプレゼント</p>
        <Button
          size="lg"
          className="bg-[#FF9900] text-white px-10 py-8 rounded-full text-2xl font-bold hover:bg-[#FF6600] hover:scale-120 transition-all duration-3000 animate-scale-bounce shadow-lg hover:shadow-xl"
          onClick={() => navigateWithUtm("/download")}
        >
          今すぐダウンロード
        </Button>
      </div>
      <img 
        src="/images/present_banner.png" 
        alt="プレゼントバナー" 
        className="w-[600px] h-[400px] object-contain -ml-4 relative z-10"
      />
    </div>
  );
};

export default DownloadBanner;
