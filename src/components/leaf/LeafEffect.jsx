import React, { useEffect, useState } from "react";
import "./leaf-effect.css";

const LeafEffect = () => {
  const [leafs, setLeafs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const startTop = Math.random() * window.innerHeight * 0.1; // vị trí Y bắt đầu
      const endTop = Math.random() * window.innerHeight * 0.9; // vị trí Y kết thúc
      const duration = 10000 + Math.random() * 3000; // thời gian bay 5–8s

      setLeafs((prev) => [...prev, { id, startTop, endTop, duration }]);

      // Xóa lá sau khi bay xong
      setTimeout(() => {
        setLeafs((prev) => prev.filter((leaf) => leaf.id !== id));
      }, duration);
    }, 60000); // 30 giây xuất hiện một chiếc

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {leafs.map((leaf) => (
        <img
          key={leaf.id}
          src="/snowflake.svg"
          alt="leaf"
          className="flying-leaf"
          style={{
            top: `${leaf.startTop}px`,
            animationDuration: `${leaf.duration}ms`,
            "--endTop": `${leaf.endTop}px`,
          }}
        />
      ))}
    </>
  );
};

export default LeafEffect;
