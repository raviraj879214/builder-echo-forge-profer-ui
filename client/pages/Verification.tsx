import { DashboardLayout } from "@/components/DashboardLayout";

export default function Verification() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-profer-gray-200 p-8 text-center">
          <h1 className="text-2xl font-bold text-profer-gray-900 mb-4">
            Verification Management
          </h1>
          <p className="text-profer-gray-600">
            This page will contain detailed verification management tools.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
