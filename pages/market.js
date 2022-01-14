import MarketOverview from "components/market/marketOverview";

import HeadWebsite from "components/global/head";

const Marketpage = () => {
  return (
    <>
      <HeadWebsite />

      <div className="flex flex-col h-screen justify-between">
        <main className="flex-grow mb-auto dark:bg-gray-800">
          <section>
            <MarketOverview />
          </section>
        </main>
      </div>
    </>
  );
}

export default Marketpage