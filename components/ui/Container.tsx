import { HTMLAttributes } from "react";

type ContainerWidth = "default" | "wide";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
}

const WIDTH_CLASS: Record<ContainerWidth, string> = {
  default: "max-w-[1200px]",
  wide: "max-w-[1320px]",
};

export default function Container({
  width = "default",
  className,
  ...props
}: ContainerProps) {
  const classes = ["mx-auto w-full px-6", WIDTH_CLASS[width], className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...props} />;
}
