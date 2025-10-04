"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, UserPlus, Users, Home } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <Card className="shadow-xl border-none">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-600" />
              Admin Dashboard
            </CardTitle>
            <p className="text-gray-500 text-sm">
              Manage approvers, settings, and approval configuration
            </p>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="home" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 bg-gray-100 p-1 rounded-xl">
                <TabsTrigger
                  value="home"
                  className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                >
                  <Home className="h-4 w-4" /> Home
                </TabsTrigger>
                <TabsTrigger
                  value="app-list"
                  className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                >
                  <Users className="h-4 w-4" /> Approvers
                </TabsTrigger>
                <TabsTrigger
                  value="add-app"
                  className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                >
                  <UserPlus className="h-4 w-4" /> Add Approver
                </TabsTrigger>
                <TabsTrigger
                  value="config"
                  className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                >
                  <Settings className="h-4 w-4" /> Config
                </TabsTrigger>
              </TabsList>

              {/* --- HOME TAB --- */}
              <TabsContent value="home" className="text-center py-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  Welcome, Admin 👋
                </h2>
                <p className="text-gray-600">
                  Use the tabs above to manage your team and approval settings.
                </p>
              </TabsContent>

              {/* --- APPROVERS LIST --- */}
              <TabsContent value="app-list">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>Approvers List</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableCaption>List of registered approvers</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Sr. No</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead className="text-center">Required</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="hover:bg-gray-50">
                          <TableCell>1</TableCell>
                          <TableCell>Mukesh Ambani</TableCell>
                          <TableCell className="text-center">
                            <Checkbox />
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                          <TableCell>2</TableCell>
                          <TableCell>Anant Ambani</TableCell>
                          <TableCell className="text-center">
                            <Checkbox />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* --- ADD APPROVER --- */}
              <TabsContent value="add-app">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>Add Approvers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableCaption>Approvers awaiting approval</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Sr. No</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Manages</TableHead>
                          <TableHead>Email</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="hover:bg-gray-50">
                          <TableCell>1</TableCell>
                          <TableCell>Mukesh Ambani</TableCell>
                          <TableCell>Sarah</TableCell>
                          <TableCell>ambani@gmail.com</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                          <TableCell>2</TableCell>
                          <TableCell>Anant Ambani</TableCell>
                          <TableCell>George</TableCell>
                          <TableCell>anant@gmail.com</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <div className="mt-4 flex justify-end">
                      <Button>Add New Approver</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* --- CONFIGURATION --- */}
              <TabsContent value="config">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>Approval Configuration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p>Is Manage an Approver:</p>
                      <Checkbox />
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Approvers Sequence:</p>
                      <Checkbox />
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Minimal Approval Percentage:</p>
                      <div className="flex items-center gap-2">
                        <Input
                          placeholder="Enter %"
                          className="w-20 text-center"
                          type="number"
                        />
                        <span>%</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Save Configuration</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
