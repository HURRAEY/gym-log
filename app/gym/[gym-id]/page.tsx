"use client";
import { GYM_LOG_DUMMY_DATA } from "@/constants/gym-dummy";
import { GymLog } from "@/types/gym";
import { memo, useState } from "react";
import { DateTitle } from "./components/date-title";
import { Button } from "@/components/ui/button";
import { ExerciseItem } from "./components/excercise-item";

export default function Gym() {
  /** @note 추후 더미데이터 API로 교체 예정 */
  const [gymLog] = useState<GymLog>(GYM_LOG_DUMMY_DATA[0]);
  return (
    <>
      <DateTitle date={gymLog.date} />
      {gymLog.excercises.map((excercise) => {
        return <ExerciseItem key={excercise.id} exercise={excercise} />;
      })}
    </>
  );
}
