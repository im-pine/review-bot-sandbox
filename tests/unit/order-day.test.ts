/** @test 필수 · 단위 — 주문 날짜 표기 (한국 시간) */
import { formatOrderDay } from "@/features/shop/mypage/labels";

describe("formatOrderDay", () => {
  it("한국 시간 기준 날짜를 YYYY.MM.DD로 보여 준다", () => {
    expect(formatOrderDay(new Date("2026-10-08T05:30:00Z"))).toBe("2026.10.08");
  });

  it("UTC로는 전날이어도 한국 시간 자정이 지났으면 다음 날로 보여 준다", () => {
    // 2026-10-08 15:30 UTC = 2026-10-09 00:30 KST
    expect(formatOrderDay(new Date("2026-10-08T15:30:00Z"))).toBe("2026.10.09");
  });
});
