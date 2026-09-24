export default function DashboardSkeleton() {
  return (
    <section className="text-center mt-12">
      {/* Title Skeleton */}
      <div className="mb-8">
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-64 mx-auto mb-4"></div>
      </div>

      {/* Project Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto m-12 px-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-4 border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded">
            {/* Card Title */}
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-3 w-3/4"></div>

            {/* Card Description */}
            <div className="space-y-2 mb-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
            </div>

            {/* Technologies */}
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-3 w-2/3"></div>

            {/* Link Button */}
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded mt-3 w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}