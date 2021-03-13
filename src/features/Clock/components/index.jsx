import useClock from "features/hooks/useClock";
import React, { useEffect, useState } from "react";

Clock.propTypes = {};

function Clock(props) {
  const { timeString } = useClock();

  return (
    <div>
      <div style={{ fontSize: "48px" }}>{timeString}</div>
    </div>
  );
}

export default Clock;
