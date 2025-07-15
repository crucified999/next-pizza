import { Skeleton } from "./skeleton";

export const SkeletonIngredients = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li>
        <Skeleton className="w-[150px] h-[24px] rounded-full" />
      </li>
      <li>
        <Skeleton className="w-[150px] h-[24px] rounded-full" />
      </li>
      <li>
        <Skeleton className="w-[150px] h-[24px] rounded-full" />
      </li>
      <li>
        <Skeleton className="w-[150px] h-[24px] rounded-full" />
      </li>
      <li>
        <Skeleton className="w-[150px] h-[24px] rounded-full" />
      </li>
    </ul>
  );
};