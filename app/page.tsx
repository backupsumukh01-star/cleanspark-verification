import TokenLogo from '@/components/TokenLogo'

const CONTRACT_ADDRESS = '0x9C479B1441fdf19CA8F75a74607a2687676674A0'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-2xl px-6 py-8 text-center">
          <TokenLogo className="mx-auto h-20 w-20" />
          <h1 className="mt-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
            CleanSpark Mining
          </h1>
          <p className="mt-1 text-lg font-medium text-accent">CLSM</p>
        </div>
      </header>

      {/* Description */}
      <section className="mx-auto max-w-2xl px-6 py-10">
        <p className="text-center text-gray-600 leading-relaxed">
          CleanSpark Mining (CLSM) is a BEP-20 utility token deployed on BNB
          Smart Chain, designed for simple wallet-to-wallet transfers with a
          fixed supply.
        </p>
      </section>

      {/* Token Information Box */}
      <section className="mx-auto w-full max-w-2xl px-6 py-4">
        <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Token Information
          </h2>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-gray-200 pb-2">
              <dt className="text-gray-500">Name</dt>
              <dd className="font-medium text-gray-900">CleanSpark Mining</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-gray-200 pb-2">
              <dt className="text-gray-500">Symbol</dt>
              <dd className="font-medium text-gray-900">CLSM</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-gray-200 pb-2">
              <dt className="text-gray-500">Network</dt>
              <dd className="font-medium text-gray-900">BNB Smart Chain</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-gray-200 pb-2">
              <dt className="text-gray-500">Total Supply</dt>
              <dd className="font-medium text-gray-900">1,000,000,000 CLSM</dd>
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <dt className="text-gray-500">Contract Address</dt>
              <dd className="break-all font-mono text-gray-900">
                {CONTRACT_ADDRESS}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-2xl px-6 py-8">
        <p className="text-center text-sm text-gray-500 italic">
          This website is for informational purposes only and does not
          constitute financial advice.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 bg-white py-6">
        <p className="text-center text-sm text-gray-500">
          © 2026 CleanSpark Mining
        </p>
      </footer>
    </main>
  )
}
