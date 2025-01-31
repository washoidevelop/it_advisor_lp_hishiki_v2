const ValueFeaturesNegative = () => {
  return (
    <div className="bg-white pt-12 pb-6 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-gray-700 rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-left mb-4">
            AI活用をしなかった場合
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E3A51] mb-4">
                顧客から見放される
              </h3>
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
