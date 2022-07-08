import React from "react";

export function MyHooks({ title, id }: { title: string; id?: string }) {
  const items = 1000;
  const multiplier = 5;
  const result = React.useMemo(
    () => calculate(items, multiplier),
    [items, multiplier]
  );

  return <div>{id}</div>;
}

export function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return [isMounted];
}

function calculate(items: number, multiplier: number) {
  return new Array(items).fill(1).reduce((a, v) => a * multiplier);
}
