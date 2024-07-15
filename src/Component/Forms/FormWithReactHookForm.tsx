import { FieldValue, useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Please add a name with more than 3 character" }),
  age: z.number({message:'age is requaired'}).min(18, { message: "You should have a age above 18" }),
});

type FormData = z.infer<typeof schema>;

const FormWithReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors ,isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValue) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-control">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormWithReactHookForm;
