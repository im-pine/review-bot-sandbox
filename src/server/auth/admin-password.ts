import "server-only";
import { timingSafeEqual } from "node:crypto";

/**
 * 관리자 데이터 변경 전 비밀번호 확인. 반드시 서버(Server Action 안)에서 호출한다.
 * Server Action은 화면을 거치지 않고도 호출되므로 입력 타입부터 확인한다 (문자열이 아니면 거부).
 */
export function verifyAdminPassword(input: unknown): boolean {
  if (typeof input !== "string") return false;
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
