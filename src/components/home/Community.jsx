import { Button } from "../ui/button";
import { Field } from "../ui/field";

const Community = () => {
  return (
    <div className="my-24">
      <h1 className=" text-3xl md:text-6xl font-bold text-text-primary text-center mb-4 md:mb-8">
        তুমি কি গণিতে সেরাদের সেরা হতে চাও?
      </h1>
      <p className="text-text-secondary text-center text-xl">
        তুমি যদি গণিতে ১০০ তে ১০০ হতে চাও তাহলে জয়েন করো আমাদের সাথে </p>
<Field
  orientation="horizontal"
  className="w-full justify-center py-4 md:py-8"
>
<Button
  onClick={() =>
    window.open(
      "https://www.facebook.com/groups/sajansiremp",
      "_blank"
    )
  }
  className="
    text-lg
    md:text-xl
    px-10
    md:px-16
    py-6
    rounded-2xl
    bg-primary
    hover:bg-primary-hover
    text-white
    shadow-lg
    hover:shadow-xl
    hover:scale-[1.02]
    transition-all
    duration-300
  "
>
  Join Community
</Button>
</Field>
    </div>
  );
};

export default Community;