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
import { ExerciseFormData } from "@/types/form";
import { useForm, useFieldArray } from "react-hook-form";

export const ExerciseItem = ({ exercise }: { exercise: Excercise }) => {
  const { register, control, handleSubmit } = useForm<ExerciseFormData>({
    defaultValues: {
      exerciseSets: exercise.exerciseSets.map((set) => ({
        weight: set.weight,
        reps: set.reps,
      })),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "exerciseSets",
  });

  const onSubmit = (data: ExerciseFormData) => {
    console.log("제출된 데이터:", data);
    //여기서 나중에 서버로 데이터를 전송하거나 상태 업데이트 가능
  };

  return (
    <div className="w-full">
      <div className="mb-4">{exercise.name}</div>
      <div className="flex w-full justify-space">
        {/* <FieldLabel htmlFor="username">Weight</FieldLabel> */}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          {fields.map((field, index) => {
            return (
              <FieldSet key={field.id}>
                <div className="flex gap-4">
                  <Field>
                    <Input
                      type="number"
                      placeholder="Weight"
                      {...register(`exerciseSets.${index}.weight`, {
                        valueAsNumber: true,
                        min: { value: 0, message: "0 이상이어야 합니다" },
                      })}
                    />
                  </Field>
                  <Field>
                    <Input
                      type="number"
                      placeholder="Reps"
                      {...register(`exerciseSets.${index}.reps`, {
                        valueAsNumber: true,
                        min: { value: 1, message: "1 이상이어야 합니다" },
                      })}
                    />
                  </Field>
                </div>
              </FieldSet>
            );
          })}
        </FieldGroup>
      </form>
      <div className="flex w-full my-4">
        <Button
          type="button"
          className="w-full h-12 text-2xl font-bold "
          onClick={() => append({ weight: 0, reps: 0 })}
        >
          +
        </Button>
      </div>
    </div>
  );
};
