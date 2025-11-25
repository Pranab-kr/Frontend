import { useRef, useState, type FormEvent } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmitedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmitedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter ur name" ref={name} />
      <input type="email" placeholder="Enter ur email" ref={email} />
      <input type="password" placeholder="Enter ur password" ref={password} />

      <button type="submit">Submit</button>

      <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>email: {submittedData.email}</h1>
        <h1>password: {submittedData.password}</h1>
      </section>
    </form>
  );
};
export default Form;
