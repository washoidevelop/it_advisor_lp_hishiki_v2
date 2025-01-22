const AIMediaSection = () => {
  return (
    <div className="bg-[#279149] py-12 sm:py-16 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold text-white">
              ChatGPT×Excelの活用法を無料ダウンロードできます
            </h2>
          </div>
          <p className="text-white text-sm sm:text-[15px]">
            お客様の業務をいますぐ変革する生成AI活用法をダウンロードできます。<br />ツキ１から得られる効果を具体的にイメージしていただけます。
          </p>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-3 underline underline-offset-8">こんな方におすすめです</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-[15px]">
              <li>生成AIを活用したいが、具体的な活用方法がわからない方</li>
              <li>すぐに実践できる具体的なAI活用事例を知りたい方</li>
              <li>いま取り組んでいるDXに漠然とした疑問・不安がある方</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform">
              <div className="space-y-4">
                <h3 className="ml-6 mt-6 text-[18px] font-bold text-[#279149] leading-tight">
                  エクセルを使用したChatGPT活用法の例
                </h3>
                  <img
                    src="/images/excel.png"
                    alt="OCR Process"
                    className="w-full h-auto"
                  />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform">
              <div className="space-y-4">
                <h3 className="ml-6 mt-6 text-[18px] font-bold text-[#279149] leading-tight">
                  マクロ(VBA)を使用したChatGPT活用法の例
                </h3>
                  <img
                    src="/images/macro.png"
                    alt="OCR Process"
                    className="w-full h-auto"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMediaSection;
