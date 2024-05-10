"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export default function BreadCrumbNav() {
  const pathname = usePathname();
  const { slug } = useParams();
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/admin">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathname.startsWith("/admin/orders") && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/admin/orders">Orders</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {pathname.startsWith("/admin/appointments") && (
          <>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Appointments</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}

        {pathname.startsWith("/admin/products") && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/admin/products">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {pathname.startsWith("/admin/products") &&
          slug &&
          !pathname.includes("categories") && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Edit Product</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}

        {pathname.startsWith("/admin/products/add") && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>New Product</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}

        {pathname.startsWith("/admin/products/categories") && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Categories</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
