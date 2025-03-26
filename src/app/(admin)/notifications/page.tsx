"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import NotificationsTable from "@/components/tables/NotificationsTable";
import Pagination from "@/components/tables/Pagination";


export default function page() {
    return (
        <div>
            <PageBreadcrumb pageTitle="All Notifcations" />
            <div className="space-y-6">
                <NotificationsTable />
                <div className="w-full flex justify-end">
                    <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
                </div>
            </div>
        </div>
    )
}
