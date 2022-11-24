import { useEffect, useRef } from "react";

export default function RefFocusPage() {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input type="password" ref={inputRef} />;
}
