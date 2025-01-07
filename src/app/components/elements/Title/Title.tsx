import { Props } from "./@types";

export const Title = ({ children, className, ...rest }: Props) => {
  return (
    <h3 className={`text-xl font-semibold ${className}`} {...rest}>
      {children}
    </h3>
  );
};