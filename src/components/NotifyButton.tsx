"use client";

import { useNotify } from "./NotifyModal";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  productId?: string;
  productName?: string;
  variant?: string;
};

export function NotifyButton({
  productId,
  productName,
  variant,
  children,
  onClick,
  ...rest
}: Props) {
  const { open } = useNotify();
  return (
    <button
      type="button"
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) {
          open({ productId, productName, variant });
        }
      }}
    >
      {children}
    </button>
  );
}
