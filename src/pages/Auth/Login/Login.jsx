import BackButton from "@/components/shared/BackButton";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const handleLogin = (data) => {
    console.log(data);

    // reset form after submit
    reset();
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 md:mb-8">
          <BackButton />
        </div>

        <h1 className="text-3xl font-bold text-text-primary">Login</h1>

        <p className="text-text-secondary mt-2">
          Start your learning journey today.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(handleLogin)}>
        <FieldGroup className="space-y-5">
          {/* Email */}
          <Field className="space-y-1">
            <FieldLabel>Email</FieldLabel>

            <Input
              type="email"
              className="p-4
                      border-border
                      focus-visible:border-primary
                      focus-visible:ring-primary/20
                         "
              placeholder="name@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </Field>

          {/* Password */}
          <Field className="space-y-1">
            <FieldLabel>Password</FieldLabel>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="p-4
                      border-border
                      focus-visible:border-primary
                      focus-visible:ring-primary/20
                         "
                {...register("password", {
                  required: "Password is required",

                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },

                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
                  },

                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                    message:
                      "Password must contain uppercase, lowercase, number and special character",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </Field>

          {/* Buttons */}
          <Field orientation="horizontal w-full">
            <Button
              type="button"
              variant="outline"
              onClick={() => reset()}
              className=" w-1/2
    px-6
    py-5
    rounded-xl
    border-border
    hover:bg-muted
    hover:border-primary
    transition-all
    duration-300
  "
            >
              Clear
            </Button>

            <Button
              type="submit"
              className=" w-1/2 px-6 py-5 rounded-xl not-[]:bg-primary hover:bg-primary-hover
    text-white
    font-medium
    shadow-md
    hover:shadow-lg
    hover:scale-[1.02]
    transition-all
    duration-300
  "
            >
              Login
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );

};

export default Login;