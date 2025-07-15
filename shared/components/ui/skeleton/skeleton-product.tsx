import { Skeleton } from "./skeleton";

export const SkeletonProduct = () => {
  return (
    <div className="flex flex-col gap-2 max-h-[430px]">
      <Skeleton className="w-[211px] h-[211px] rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-4/5 h-[22px]" />
        <Skeleton className="w-full h-[22px]" />
      </div>
    </div>
  );
};
