"use client";

import { useState } from "react";
import { PasswordConfirm } from "@/features/admin/common/PasswordConfirm";
import { revealRecipientPhone } from "../actions";

/**
 * 수령인 연락처 — 기본은 가린 번호, "연락처 보기"에서 관리자 비밀번호를 확인하면 원본을 보여 준다 (배송 연락용).
 * 원본은 이 화면 상태에만 두고, 새로고침하면 다시 가려진다.
 */
export function RecipientPhone({ orderNo, masked }: { orderNo: string; masked: string }) {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState<string | null>(null);

  if (phone)
    return (
      <a href={`tel:${phone}`} className="text-link hover:underline">
        {phone}
      </a>
    );

  return (
    <span className="inline-flex items-center gap-2">
      {masked}
      <button type="button" onClick={() => setOpen(true)} className="type-body-sm text-link hover:underline">
        연락처 보기
      </button>
      <PasswordConfirm
        open={open}
        onOpenChange={setOpen}
        title="연락처 원본 보기"
        description={"배송 연락을 위해 받는 분 연락처 원본을 봅니다.\n관리자 비밀번호를 입력해 주세요."}
        confirmLabel="보기"
        onConfirm={async (password) => {
          const result = await revealRecipientPhone(password, orderNo);
          if (result.ok) setPhone(result.phone);
          return result;
        }}
      />
    </span>
  );
}
