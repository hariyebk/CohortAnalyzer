import QuartileMetrics from "@/components/analytics/QuartileMetrics";
import ComponentCard from "@/components/common/ComponentCard";
import TableOne from "@/components/tables/TableOne";


export default function page() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12">
                <QuartileMetrics />
            </div>
            <div className="col-span-12 mt-5">
                <div className="space-y-6">
                    <ComponentCard title="Weighted Average Analysis">
                        <TableOne />
                    </ComponentCard>
                </div>
            </div>
        </div>
    )
}
