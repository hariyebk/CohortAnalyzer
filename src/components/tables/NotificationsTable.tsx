import React, { useState } from "react";
import {
Table,
TableBody,
TableCell,
TableHeader,
TableRow,
} from "../ui/table";
import { FaTrash } from "react-icons/fa";
import Badge from "../ui/badge/Badge";
import Image from "next/image";

interface Notification {
    id: number;
    user: {
        image: string;
        name: string;
    };
    date: string,
    message: string;
    status: string;
}

const tableData: Notification[] = [
{
    id: 1,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Active",
},
{
    id: 2,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Active",
},
{
    id: 3,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Pending",
},
{
    id: 4,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Active",
},
{
    id: 5,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Active",
},
{
    id: 6,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Active",
},
{
    id: 7,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Active",
},
{
    id: 8,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Active",
},
{
    id: 9,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Active",
},
{
    id: 10,
    user: {
        image: "/images/user.png",
        name: "david jhon",
    },
    message: "requests access to datasets",
    date: "2 days ago",
    status: "Active",
},
];

function handleDeleteNotification(id: number){
    // TODO: Finish the logic later
    try{

    }
    catch(error: any){

    }
}

export default function NotificationsTable() {
    const [allNotifications, setAllNotifications] = useState<Notification[]>()
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
            <div>
            <Table>
                {/* Table Header */}
                <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                    <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-base dark:text-gray-400"
                    >
                    User
                    </TableCell>
                    <TableCell
                    isHeader
                    className="px-5 py-3 max-w-[300px] font-medium text-gray-500 text-start text-base dark:text-gray-400"
                    >
                    Message
                    </TableCell>
                    <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-base dark:text-gray-400"
                    >
                    date
                    </TableCell>
                    <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-base dark:text-gray-400"
                    >
                    Status
                    </TableCell>
                    <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-base dark:text-gray-400"
                    >
                    Action
                    </TableCell>
                </TableRow>
                </TableHeader>

                {/* Table Body */}
                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {tableData.map((noti) => (
                    <TableRow key={noti.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                        <div className="flex items-center gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                            <Image
                            width={40}
                            height={40}
                            src={noti.user.image}
                            alt={noti.user.name}
                            />
                        </div>
                        </div>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {noti.message}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {noti.date}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <Badge
                        size="sm"
                        color={
                            noti.status === "Active"
                            ? "success"
                            : noti.status === "Pending"
                            ? "warning"
                            : "error"
                        }
                        >
                        {noti.status}
                        </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                        <button className="" onClick={() => handleDeleteNotification}>
                            <FaTrash className="dark:text-red-500 text-gray-800 size-4" />
                        </button>
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
