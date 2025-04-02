"use client";
import { DemographicCard, RecentOrders } from "@/components/analytics";
import QuartileMetrics from "@/components/analytics/QuartileMetrics";
import ComponentCard from "@/components/common/ComponentCard";
import Pagination from "@/components/tables/Pagination";
import TableOne from "@/components/tables/TableOne";


export default function page() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12">
                <QuartileMetrics />
            </div>
            <div className="col-span-12 xl:col-span-5">
                <DemographicCard />
            </div>

            <div className="col-span-12 xl:col-span-7">
                <RecentOrders />
            </div>
            <div className="col-span-12 mt-3">
                <div className="space-y-6">
                    <ComponentCard title="Weighted Average Analysis">
                        <TableOne />
                        <div className="w-full flex justify-end">
                            <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
                        </div>
                    </ComponentCard>
                </div>
            </div>
        </div>
    )
}
