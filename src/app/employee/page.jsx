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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Employee Dashboard</h1>
          <p className="text-gray-500 text-sm">Manage and track your expense reimbursements</p>
        </div>

        <div className="flex gap-3">
          {/* Add Expense Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                + New Expense
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Expense</DialogTitle>
                <DialogDescription>
                  Fill in the details of your expense claim below.
                </DialogDescription>
              </DialogHeader>

             <div className="flex flex-col gap-3">
  <label className="text-sm font-medium">Note</label>
  <Input placeholder="e.g. Business lunch at Taj Hotel" />

  <label className="text-sm font-medium">Category</label>
  <Input placeholder="e.g. Food / Travel / Stay" />

  <label className="text-sm font-medium">Amount</label>
  <div className="flex items-center gap-2">
    <Select>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="INR" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="INR">₹ INR</SelectItem>
        <SelectItem value="USD">$ USD</SelectItem>
        <SelectItem value="EUR">€ EUR</SelectItem>
        <SelectItem value="GBP">£ GBP</SelectItem>
        <SelectItem value="JPY">¥ JPY</SelectItem>
      </SelectContent>
    </Select>

    <Input
      placeholder="Enter amount"
      type="number"
      className="flex-1"
    />
  </div>
</div>


              <DialogFooter className="mt-4 flex justify-end gap-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="secondary">Attach Receipt</Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Save Expense
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Upload OCR Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="font-medium">
                📸 Upload Receipt
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Receipt</DialogTitle>
                <DialogDescription>
                  Scan or upload a receipt to auto-generate expense details using OCR.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-3">
                <Input type="file" accept="image/*" />
              </div>
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Process Receipt
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <Separator className="mb-8" />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-700">Employee Name</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-gray-900">Elon Musk</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-700">Amount Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-green-600">$3000</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-700">Pending Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-yellow-600">$550</p>
          </CardContent>
        </Card>
      </div>

      {/* Expense Table */}
      <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Expenses</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>A list of your recent submitted expenses.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Note</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Taj Hotel</TableCell>
                <TableCell>16/07/2025</TableCell>
                <TableCell>Food</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-700 border-green-300">
                    Approved
                  </Badge>
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-gray-50">
                <TableCell>Uber Ride</TableCell>
                <TableCell>20/07/2025</TableCell>
                <TableCell>Travel</TableCell>
                <TableCell>$40.00</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">
                    Pending
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
