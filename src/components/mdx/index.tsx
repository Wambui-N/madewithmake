import Image from "next/image";
import Link from "next/link";

// Custom components for MDX
const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  return isInternalLink ? (
    <Link
      href={href}
      {...props}
      className="text-sky transition-colors duration-200 hover:underline"
    >
      {props.children}
    </Link>
  ) : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="text-sky transition-colors duration-200 hover:underline"
    >
      {props.children}
    </a>
  );
};

const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  if (!props.src) return null;

  return (
    <div className="my-8 flex justify-center">
      <Image
        src={props.src}
        alt={props.alt || ""}
        width={720}
        height={480}
        layout="intrinsic"
        className="max-w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

const AlertBox = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}) => {
  const colors = {
    info: "bg-blue-50 border-l-4 border-blue-500 text-blue-800",
    warning: "bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800",
    success: "bg-green-50 border-l-4 border-green-500 text-green-800",
  };

  return (
    <div className={`rounded-lg p-4 ${colors[type]} my-6 shadow-sm`}>
      {children}
    </div>
  );
};

const CodeBlock = ({
  children,
  language,
}: {
  children: string;
  language?: string;
}) => {
  return (
    <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm leading-6 text-white shadow-md">
      <code className={language ? `language-${language}` : ""}>{children}</code>
    </pre>
  );
};

// Typography Styling
const CustomParagraph = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className="my-6 text-md leading-relaxed text-grey">
      {props.children}
    </p>
  );
};

const CustomH1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className="my-8 text-4xl font-extrabold text-white">
      {props.children}
    </h1>
  );
};

const CustomH2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className="my-6 text-3xl font-bold text-white">
      {props.children}
    </h2>
  );
};

const CustomH3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className="my-4 text-2xl font-semibold text-white">
      {props.children}
    </h3>
  );
};

// Custom Lists
const CustomUL = (props: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className="my-4 list-inside list-disc space-y-2 text-md text-grey">
      {props.children}
    </ul>
  );
};

const CustomOL = (props: React.HTMLAttributes<HTMLOListElement>) => {
  return (
    <ol className="my-2 list-inside text-grey">
      {props.children}
    </ol>
  );
};

// Blockquote for Quotes or Highlights
const CustomBlockquote = (props: React.HTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote className="my-6 border-l-4 border-gray-500 pl-4 italic text-white">
      {props.children}
    </blockquote>
  );
};

// Horizontal Rule (Section Break)
const CustomHR = () => {
  return <hr className="my-8 border-t border-gray-300" />;
};

// Export all components
export const mdxComponents = {
  p: CustomParagraph,
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  a: CustomLink,
  img: CustomImage,
  ul: CustomUL,
  ol: CustomOL,
  blockquote: CustomBlockquote,
  hr: CustomHR,
  AlertBox,
  CodeBlock,
};
