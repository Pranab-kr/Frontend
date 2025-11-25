import { useState, type ChangeEvent, type FormEvent } from "react";

interface formType {
  name: string;
  email: string;
}

const ContectFrom = () => {
  const [formData, setFormData] = useState<formType>({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSublit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("From Submited", formData);
  };

  return (
    <form onSubmit={handleSublit}>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default ContectFrom;
