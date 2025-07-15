import { Skeleton } from "./skeleton";

export const SkeletonCategoryList = () => {
  return (
    <ul className="flex gap-3">
      <li>
        <Skeleton className="w-[100px] h-[30px] rounded-full" />
      </li>
      <li>
        <Skeleton className="w-[100px] h-[30px] rounded-full" />
      </li>
      <li>
        <Skeleton className="w-[100px] h-[30px] rounded-full" />
      </li>
      <li>
        <Skeleton className="w-[100px] h-[30px] rounded-full" />
      </li>
      <li>
        <Skeleton className="w-[100px] h-[30px] rounded-full" />
      </li>
    </ul>
  );
};