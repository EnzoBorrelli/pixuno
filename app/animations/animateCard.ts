import { Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { CARD_COLOR, CARD_TYPE } from "~/enums/cards";
import gsap from "gsap";
import soundPlayer from "~/utils/soundPlayer";

enum ANIM_PHASES {
  SHRINK = "shrink",
  EXPAND = "expand",
}

function Flip(
  type: CARD_TYPE,
  color: CARD_COLOR,
  isFlipped: boolean
) {
  const cardFront = `/assets/images/deck/${type}-${color}.png`;
  const cardBack = "/assets/images/card_back.png";

  const textureCache = useRef({
    front: Texture.from(cardFront),
    back: Texture.from(cardBack),
  });

  const [texture, setTexture] = useState(
    isFlipped ? textureCache.current.back : textureCache.current.front
  );

  const spriteRef = useRef<any>(null);
  const currentFlipped = useRef(isFlipped);
  const scale = useRef({ x: 1 });
  const timeLine = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (currentFlipped.current === isFlipped) return;

    currentFlipped.current = isFlipped;

    if (timeLine.current) {
      timeLine.current.kill();
    }
    const sprite = spriteRef.current;
    if (!sprite) return;
    timeLine.current = gsap.timeline();

    timeLine.current.to(sprite.scale, {
      x: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        sprite.visible = false;
        setTexture(
          isFlipped ? textureCache.current.back : textureCache.current.front
        );
        requestAnimationFrame(() => {
          sprite.visible = true;
        });
      },
    });

    timeLine.current.to(sprite.scale, {
      x: 1,
      duration: 0.2,
      ease: "power2.out",
    });

    return () => {
      timeLine.current?.kill();
      timeLine.current = null;
    };
  }, [isFlipped, type, color]);

  return { texture, spriteRef };
}

function Hover() {
  const [hover, setHover] = useState(false);
  const y = useRef({ value: 0 });
  const [hoverY, setHoverY] = useState(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if(hover){
      soundPlayer.PlaySound({folder:"cards",audio:"pick"})
    }
    if (tweenRef.current) {
      tweenRef.current.kill();
    }
    tweenRef.current = gsap.to(y.current, {
      value: hover ? -30 : 0,
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

export default {Flip, Hover}
