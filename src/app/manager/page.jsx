"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ManagerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Steve Jobs 👋</h1>
          <p className="text-gray-500 text-sm">Approve or reject employee expense claims below.</p>
        </div>
        {/* <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100">
          View Summary
        </Button> */}
      </header>

      <Separator className="mb-8" />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-700">Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-yellow-600">5</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-700">Approved Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-green-600">3</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-700">Rejected Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-red-600">1</p>
          </CardContent>
        </Card>
      </div>

      {/* Expense Approval Table */}
      <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pending Expense Approvals</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>List of expenses awaiting your approval.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Employee</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Note</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50 transition-all">
                <TableCell className="font-medium">Elon Musk</TableCell>
                <TableCell>16/07/2025</TableCell>
                <TableCell>Food</TableCell>
                <TableCell>Taj Hotel</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <Button
                      size="icon"
                      className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2"
                      title="Approve"
                    >
                      <Check strokeWidth={3} size={18} />
                    </Button>
                    <Button
                      size="icon"
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2"
                      title="Reject"
                    >
                      <X strokeWidth={3} size={18} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-gray-50 transition-all">
                <TableCell>Mark Zuckerberg</TableCell>
                <TableCell>20/07/2025</TableCell>
                <TableCell>Travel</TableCell>
                <TableCell>Flight to Delhi</TableCell>
                <TableCell>$420.00</TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <Button
                      size="icon"
                      className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2"
                      title="Approve"
                    >
                      <Check strokeWidth={3} size={18} />
                    </Button>
                    <Button
                      size="icon"
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2"
                      title="Reject"
                    >
                      <X strokeWidth={3} size={18} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
