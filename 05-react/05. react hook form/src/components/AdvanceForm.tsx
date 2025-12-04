import { useForm, type SubmitHandler } from "react-hook-form";
import "./style.css"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const AdvanceForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" placeholder="First Name" id="firstName"
        {...register("firstName", {required: "Enter ur first Name"})} />

        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" placeholder="Last Name" id="lastName"
        {...register("lastName", {required: "Enter ur last Name"})} />

        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" placeholder="Email" id="email"
        {...register("email", {required: "Enter ur email",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email"
          }
        })} />

        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="city">City: </label>
        <input type="text" placeholder="City" id="city"
        {...register("city", {required: "Enter ur city"})} />

        {errors.city && <p>{errors.city.message}</p>}
      </div>

      <div>
        <label htmlFor="state">State: </label>
        <input type="text" placeholder="State" id="state"
        {...register("state", {required: "Enter ur state"})} />

        {errors.state && <p>{errors.state.message}</p>}
      </div>

      <div>
        <label htmlFor="zip">Zip: </label>
        <input type="text" placeholder="Zip" id="zip"
        {...register("zip", {required: "Enter ur zip"})} />

        {errors.zip && <p>{errors.zip.message}</p>}
      </div>

      <div>
        <label htmlFor="country">Country: </label>
        <input type="text" placeholder="Country" id="country"
        {...register("country", {required: "Enter ur country"})} />

        {errors.country && <p>{errors.country.message}</p>}
      </div>

      <div>
        <label htmlFor="completeLocation">Complete Location: </label>
        <textarea placeholder="Complete Location" id="completeLocation"
        {...register("completeLocation", {required: "Enter ur complete location"})} />

        {errors.completeLocation && <p>{errors.completeLocation.message}</p>}
      </div>

      <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdvanceForm;