import { DashboardLayout } from "@/components/DashboardLayout";

export default function Companies() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-profer-gray-200 p-8 text-center">
          <h1 className="text-2xl font-bold text-profer-gray-900 mb-4">
            Companies
          </h1>
          <p className="text-profer-gray-600">
            Manage and view all registered companies.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
