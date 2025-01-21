const ValueFeaturesNegative = () => {
  return (
    <div className="bg-white pt-12 pb-6 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-gray-700 rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-left mb-4">
            AI活用をしなかった場合
          </h2>
          <p className="text-white text-sm sm:text-[15px] mb-8 sm:mb-12">
            これらのシナリオは決して絵空事ではなく、「やらないリスク」は想像以上に大きいことを直視しなければいけません。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E3A51] mb-4">
                顧客から見放される
              </h3>
              <p className="text-sm text-[#0E3A51] leading-relaxed">
                競合がAIを駆使して素早く顧客ニーズに応え始めると、旧来のやり方では提案やサービスのスピード感で圧倒的に負けてしまう。
              </p>
              <img
                src="/images/abandoned_by_customer.svg"
                alt="顧客から見放される"
                className="max-w-[100px] md:max-w-[150px] mx-auto mt-6"
              />
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E3A51] mb-4">
                優秀な人材が辞めていく
              </h3>
              <p className="text-sm text-[#0E3A51] leading-relaxed">
                AIを活用して新しい取り組みができる会社は山ほどあるため、「ここでは未来を作れない」と見限られてしまう。
              </p>
              <img
                src="/images/outflow.svg"
                alt="優秀な人材が辞めていく"
                className="max-w-[100px] md:max-w-[150px] mx-auto mt-6 md:mt-12"
              />
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E3A51] mb-4">
                「時代遅れ」認定されてしまう
              </h3>
              <p className="text-sm text-[#0E3A51] leading-relaxed">
                どれだけ良い伝統や実績があっても、「あの企業は変化できない」と見られてしまい、新しいチャンスを逃してしまう。
              </p>
              <img
                src="/images/outdated.png"
                alt="時代遅れ認知されてしまう"
                className="max-w-[100px] md:max-w-[150px] mx-auto mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueFeaturesNegative;
