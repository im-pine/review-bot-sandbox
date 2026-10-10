import { Suspense } from "react";
import type { Metadata } from "next";
import { MemberOrderList } from "@/features/shop/mypage/components/MemberOrderList";

export const metadata: Metadata = { title: "주문 내역 | Pine Bakery" };

/** 주문 내역 로딩 중 스켈레톤 표시 */
export default function Page({ searchParams }: PageProps<"/mypage/orders">) {
  return (
    <Suspense fallback={<div aria-busy="true" className="h-96 animate-pulse bg-section" />}>
      <MemberOrderList searchParams={searchParams} />
    </Suspense>
  );
}
