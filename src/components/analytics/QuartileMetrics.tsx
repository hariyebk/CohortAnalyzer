
export default function QuartileMetrics() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                <h2 className='text-gray-800 font-bold text-title-sm dark:text-white/90'> 13,130 </h2>
                <div className='flex flex-wrap items-center justify-between gap-3 mt-6'>
                    <h6 className="text-sm text-gray-500 dark:text-gray-400"> Total Customers </h6>
                    <div className='flex items-center gap-1.5'>
                        <span className="rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                            +10%
                        </span>
                        <h6 className="text-sm text-gray-500 dark:text-gray-400"> last month </h6>
                    </div>
                </div>
            </div>
            
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                <h2 className='text-gray-800 font-bold text-title-sm dark:text-white/90'> 16,451 </h2>
                <div className='flex flex-wrap items-center justify-between gap-3 mt-6'>
                    <h6 className="text-sm text-gray-500 dark:text-gray-400"> Total Orders </h6>
                    <div className='flex items-center gap-1.5'>
                        <span className="rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                            +6%
                        </span>
                        <h6 className="text-sm text-gray-500 dark:text-gray-400"> last month </h6>
                    </div>
                </div>
            </div>
            

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                <h2 className='text-gray-800 font-bold text-title-sm dark:text-white/90'> $86,268 </h2>
                <div className='flex flex-wrap items-center justify-between gap-3 mt-6'>
                    <h6 className="text-sm text-gray-500 dark:text-gray-400"> Total Revenue </h6>
                    <div className='flex items-center gap-1.5'>
                        <span className="rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                            +20%
                        </span>
                        <h6 className="text-sm text-gray-500 dark:text-gray-400"> last month </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
