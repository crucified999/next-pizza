import { SkeletonProduct } from "./skeleton-product";

export const SkeletinProductsList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(285px,1fr))] gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonProduct key={i} />
      ))}
    </div>
  );
};