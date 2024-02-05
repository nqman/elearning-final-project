import React, { useEffect } from "react";
import EventSlide from "./EventSlide/EventSlide";
import EventContent from "./EventContent/EventContent";

export default function Event() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <EventSlide />

      <EventContent />
    </div>
  );
}
