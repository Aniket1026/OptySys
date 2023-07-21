import { FormProps } from "@/types/auth";

export default function Form({
  title,
  subtitle,
  onSubmit,
  children,
}: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-col justify-between h-full sm:gap-10 gap-8 sm:p-5 p-3 border-2 border-gray-200 shadow rounded-md max-w-md m-auto w-full"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold text-pink">{title}</h3>
        <h4 className="text-gray-500 text-sm sm:font-medium font-normal">
          {subtitle}
        </h4>
      </div>
      {children}
      <button
        className="bg-gradient-to-tl from-blue-400 to-blue-500 text-white px-2 sm:py-3 py-2 rounded sm:text-xl text-lg hover:brightness-90 transition-all duration-300"
        type="submit"
      >
        {title}
      </button>
    </form>
  );
}
