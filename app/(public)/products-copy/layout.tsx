import CategoryList from "@/components/CategoryList/CategoryList";
import { Suspense } from "react";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Suspense fallback={}>
        <CategoryList />
      </Suspense>

      <Suspense fallback={<div>Loading Categories</div>}>
        <CategoryList />
      </Suspense>

      <Suspense fallback={<div>Loading Categories</div>}>
        <CategoryList />
      </Suspense>

      {children}
    </div>
  );
};

export default Layout;
