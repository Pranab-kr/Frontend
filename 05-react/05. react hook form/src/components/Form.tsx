import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  //register: is used to register input fields to the form
  //handleSubmit: is a function that will be called when the form is submitted
  //errors: is an object that contains all the errors for the form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmitHandle: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandle)}>
      <div>
        <label htmlFor="name">Name: </label>

        <input
          type="text"
          id="name"
          placeholder="Enter Ur name"
          {...register("name", { required: "Name is required" })}
        />

        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          {...register("email", {
            required: "Please input ur email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />

        {errors.email && (
          <p style={{ color: "crimson" }}>{errors.email.message}</p>
        )}
      </div>
      <br />

      <div>
        <label htmlFor="pass">Password: </label>
        <input
          type="password"
          placeholder="password"
          id="pass"
          {...register("password", {
            minLength: {
              value: 8,
              message: "password must contain 8 characters",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      <button disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
