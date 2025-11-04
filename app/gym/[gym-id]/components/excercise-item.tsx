import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Excercise } from "@/types/gym";
import { ChangeEvent, useCallback, useState } from "react";

export const ExerciseItem = ({ exercise }: { exercise: Excercise }) => {
  const [exerciseForm, setExerciseForm] = useState(exercise);

  //weight 입력
  const handleWeightInput = useCallback(
    ({ value, index }: { value: string; index: number }) => {
      exerciseForm.exerciseSets[index].weight = Number(value);
      setExerciseForm({
        ...exerciseForm,
      });
    },
    [exerciseForm]
  );

  //reps 입력
  const handleRepsInput = useCallback(
    ({ value, index }: { value: string; index: number }) => {
      exerciseForm.exerciseSets[index].reps = Number(value);
      setExerciseForm({
        ...exerciseForm,
      });
    },
    [exerciseForm]
  );

  return (
    <div className="w-full">
      <div className="mb-4">{exercise.name}</div>
      <div className="flex w-full justify-space">
        {/* <FieldLabel htmlFor="username">Weight</FieldLabel> */}
      </div>
      <form>
        <FieldGroup>
          {exerciseForm.exerciseSets.map((exerciseSet, index) => {
            return (
              <FieldSet key={exerciseSet.index}>
                <div className="flex gap-4">
                  <Field>
                    <Input
                      type="number"
                      placeholder="Weight"
                      value={exerciseSet.weight}
                      onChange={(e) => {
                        handleWeightInput({ value: e.target.value, index });
                      }}
                    />
                  </Field>
                  <Field>
                    <Input
                      type="number"
                      placeholder="Reps"
                      value={exerciseSet.reps}
                      onChange={(e) => {
                        handleRepsInput({ value: e.target.value, index });
                      }}
                    />
                  </Field>
                </div>
              </FieldSet>
            );
          })}
        </FieldGroup>
      </form>
      <div className="flex w-full my-4">
        <Button className="w-full h-12 text-2xl font-bold ">+</Button>
      </div>
    </div>
  );
};
