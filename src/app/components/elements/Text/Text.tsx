import { Props } from "./@types";

export const Text = ({ children, className, ...rest }: Props) => {
  return (
    <p
      className={`text-gray-600 ${className} `}
      {...rest}
    >
      {children}
    </p>
  );
};