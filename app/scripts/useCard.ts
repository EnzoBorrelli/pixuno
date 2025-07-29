import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Hover() {
  const [hover, setHover] = useState(false);
  const y = useRef({ value: 0 });
  const [hoverY, setHoverY] = useState(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (tweenRef.current) {
      tweenRef.current.kill();
    }
    tweenRef.current = gsap.to(y.current, {
      value: hover ? -20 : 0,
      duration: 0.2,
      ease: "power2.out",
      onUpdate: () => {
        setHoverY(y.current.value);
      },
    });
    return () => {
      tweenRef.current?.kill();
    };
  }, [hover]);
  return { setHover, hoverY };
}

export default { Hover };
