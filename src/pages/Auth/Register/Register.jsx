import BackButton from "@/components/shared/BackButton";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const handleRegistration = (data) => {
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

        <h1 className="text-3xl font-bold text-text-primary">Create Account</h1>

        <p className="text-text-secondary mt-2">
          Start your learning journey today.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(handleRegistration)}>
        <FieldGroup className="space-y-5">
          {/* First Name */}
          <Field className="space-y-1">
            <FieldLabel>Name</FieldLabel>

            <Input
              placeholder="Name"
              className="
                p-4
                border-border
                focus-visible:border-primary
                focus-visible:ring-primary/20
              "
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Only alphabets are allowed",
                },
              })}
            />

            {errors.firstName && (
              <p className="text-sm text-red-500 mt-1">
                {errors.firstName.message}
              </p>
            )}
          </Field>

          {/* Username */}
          <Field className="space-y-1">
            <FieldLabel>Phone Number</FieldLabel>
            <Input
              className="
  p-4
  border-border
  focus-visible:border-primary
  focus-visible:ring-primary/20
"
              placeholder="Phone Number"
              type="number"
              {...register("phone", {
                required: "Phone Number is required",
                minLength: {
                  value: 11,
                  message: "Phone Number must be 11 digits",
                },
                maxLength: {
                  value: 20,
                  message: "Phone Number must be 11 digits",
                }
              })}
            />

            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">
                {errors.phone.message}
              </p>
            )}
          </Field>

          {/* Email */}
          <Field className="space-y-1">
            <FieldLabel>Email</FieldLabel>

            <Input
              className="
  p-4
  border-border
  focus-visible:border-primary
  focus-visible:ring-primary/20
"
              type="email"
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
                className="
  p-4
  border-border
  focus-visible:border-primary
  focus-visible:ring-primary/20
  pr-12
"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition border-borderfocus-visible:border-secondary
  focus-visible:ring-secondary/20"
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

          {/* Confirm Password */}
          <Field className="space-y-1">
            <FieldLabel>Confirm Password</FieldLabel>

            <div className="relative">
              <Input
                type={showRePassword ? "text" : "password"}
                placeholder="Re-Type your password"
                className="pr-12 border-border
  focus-visible:border-primary
  focus-visible:ring-primary/20"
                {...register("repassword", {
                  required: "Please confirm your password",

                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />

              <button
                type="button"
                onClick={() => setShowRePassword(!showRePassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition"
              >
                {showRePassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.repassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.repassword.message}
              </p>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="picture">Picture</FieldLabel>
            <Input id="picture" type="file" {...register("image")} />
            <FieldDescription>Select a picture to upload.</FieldDescription>
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
              Create Account
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default Register;
