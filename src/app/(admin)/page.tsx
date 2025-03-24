import type { Metadata } from "next";
import React from "react";
import {OverviewMetrics, MonthlyTarget, MonthlySalesChart, StatisticsChart} from "@/components/analytics"

export const metadata: Metadata = {
title:"",
description: "",
};

export default function Page() {
return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
            <OverviewMetrics />
            <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
            <MonthlyTarget />
        </div>

        <div className="col-span-12">
            <StatisticsChart />
        </div>
    </div>
);
}
