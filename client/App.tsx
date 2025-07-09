import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Verification from "./pages/Verification";
import Companies from "./pages/Companies";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import AddCompany from "./pages/AddCompany";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Index />} />
          <Route path="/admin/verification" element={<Verification />} />
          <Route path="/admin/companies" element={<Companies />} />
          <Route path="/admin/companies/add" element={<AddCompany />} />
          <Route path="/admin/projects" element={<Projects />} />
          <Route path="/admin/projects/add" element={<Projects />} />
          <Route path="/admin/activity" element={<Projects />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/add" element={<AddUser />} />
          <Route path="/admin/settings" element={<Settings />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
