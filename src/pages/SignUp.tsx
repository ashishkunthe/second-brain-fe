import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "../Components/CreateContentModal";
import { Button } from "../Components/Button";

interface SignUpFormData {
  username: string;
  password: string;
}

export function SignUp() {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: "",
    password: "",
  });

  const handleChange =
    (field: keyof SignUpFormData) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here, you can send formData to your backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <Input
              type="text"
              value={formData.username}
              onChange={() => handleChange("username")}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <Input
              type="password"
              value={formData.password}
              onChange={() => handleChange("password")}
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <Button
              text="Sign Up"
              size="md"
              variant="primary"
              onClick={() => handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
