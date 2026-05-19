import BackButton from "@/components/shared/BackButton";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Register = () => {
  return (
    <div>
      <div className="mb-8">
        <div className="mb-4 md:mb-8">
          <BackButton></BackButton>
        </div>

        <h1 className="text-4xl font-bold text-text-primary">Create Account</h1>

        <p className="text-text-secondary mt-2">
          Start your learning journey today.
        </p>
      </div>

      <FieldGroup className="space-y-5">
        <Field>
          <FieldLabel>Name</FieldLabel>

          <Input placeholder="Jordan Lee" />
        </Field>

        <Field>
          <FieldLabel>Email</FieldLabel>

          <Input type="email" placeholder="name@example.com" />

          <FieldDescription>
            We&apos;ll send updates to this address.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel>Password</FieldLabel>

          <Input type="password" placeholder="Enter password" />
        </Field>

        <Field orientation="horizontal">
          <Button type="reset" variant="outline">
            Reset
          </Button>

          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </div>
  );
};

export default Register;
