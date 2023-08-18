import React from "react";
import { useRef } from "react";

export default function ScrollIntoView() {
  const catRef = useRef<HTMLUListElement | null>(null);
  const firstCatRef = useRef<HTMLImageElement | null>(null);
  const secondCatRef = useRef<HTMLImageElement | null>(null);
  const thirdCatRef = useRef<HTMLImageElement | null>(null);
  const catFindHandle = (index) => {
    const find = catRef.current && Array.from(catRef.current?.children)[index];
    find?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div
      style={{
        height: "400px",
        width: "400px",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <nav style={{ position: "fixed", top: "20px" }}>
        <button onClick={() => catFindHandle(0)}>Tom</button>
        <button onClick={() => catFindHandle(1)}>Maru</button>
        <button onClick={() => catFindHandle(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={catRef} style={{ display: "flex" }}>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
