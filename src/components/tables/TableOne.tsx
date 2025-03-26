import React from "react";
import {
Table,
TableBody,
TableCell,
TableHeader,
TableRow,
} from "../ui/table";

interface Order {
    id: number;
    month: number;
    total_revenue: string;
    total_customers: number;
    weighted_average_revenue_per_user: number;
}


const tableData: Order[] = [
{
    id: 1,
    month: 1,
    total_revenue: '$70,000',
    total_customers: 150,
    weighted_average_revenue_per_user: 9,
},
{
    id: 2,
    month: 2,
    total_revenue: '$70,000',
    total_customers: 150,
    weighted_average_revenue_per_user: 9,
},
{
    id: 3,
    month: 3,
    total_revenue: '$70,000',
    total_customers: 150,
    weighted_average_revenue_per_user: 9,
},
{
    id: 4,
    month: 4,
    total_revenue: '$70,000',
    total_customers: 150,
    weighted_average_revenue_per_user: 9,
},
{
    id: 5,
    month: 5,
    total_revenue: '$70,000',
    total_customers: 150,
    weighted_average_revenue_per_user: 9,
},
{
    id: 6,
    month: 6,
    total_revenue: '$70,000',
    total_customers: 150,
    weighted_average_revenue_per_user: 9,
},
{
    id: 7,
    month: 7,
    total_revenue: '$70,000',
    total_customers: 150,
    weighted_average_revenue_per_user: 9,
},
{
    id: 8,
    month: 8,
    total_revenue: '$70,000',
    total_customers: 150,
    weighted_average_revenue_per_user: 9,
},
];

export default function TableOne() {
return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
    <div className="max-w-full max-md:overflow-x-auto">
        <div className="min-w-[1102px]">
            <Table>
                {/* Table Header */}
                <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                    <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start max-sm:text-theme-xs sm:text-base dark:text-gray-400"
                    >
                    Month
                    </TableCell>
                    <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start max-sm:text-theme-xs sm:text-base dark:text-gray-400"
                    >
                    Total Customers
                    </TableCell>
                    <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start max-sm:text-theme-xs sm:text-base dark:text-gray-400"
                    >
                    Total Revenue
                    </TableCell>
                    <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start max-sm:text-theme-xs sm:text-base dark:text-gray-400"
                    >
                    Weighted Average Revenue / User
                    </TableCell>
                </TableRow>
                </TableHeader>

                {/* Table Body */}
                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {tableData.map((data) => (
                    <TableRow key={data.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                        <span className="text-gray-500 text-center text-theme-sm dark:text-gray-400"> {data.month} </span>
                    </TableCell>
                    <TableCell className="px-8 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <span> {data.total_customers} </span>
                    </TableCell>
                    <TableCell className="px-8 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <span> {data.total_revenue} </span>
                    </TableCell>
                    <TableCell className="pl-10 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <span> {data.weighted_average_revenue_per_user} </span>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    </div>
    </div>
);
}
