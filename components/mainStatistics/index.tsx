import { statShortener } from "@/lib/utils/statShortener";
import { FC } from "react";

export interface MainStatisticsProps {
  intervalLabel: string;
  stats: Array<{ name: string; stat: number }>;
}

export const MainStatistics: FC<MainStatisticsProps> = ({
  intervalLabel,
  stats,
}) => {
  return (
    <div>
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        {intervalLabel}
      </h2>
      <dl className="mt-2 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden bg-primary-500 px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-300">
              {item.name}
            </dt>
            <dd className="font-sans mt-1 text-3xl font-bold tracking-tight text-white">
              {statShortener(item.stat)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
