import { useRef } from "react";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import axios from "axios";
import { BACK_END_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function handleSignUp() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(`${BACK_END_URL}/api/v1/signup`, {
      username,
      password,
    });
    navigate("/signin");
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Username
          </label>
          <Input ref={usernameRef} placeholder="Enter your username" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <Input ref={passwordRef} placeholder="Enter your password" />
        </div>
        <div className="flex justify-center">
          <Button
            text="Sign Up"
            size="md"
            variant="primary"
            onClick={handleSignUp}
          />
        </div>
      </div>
    </div>
  );
}
