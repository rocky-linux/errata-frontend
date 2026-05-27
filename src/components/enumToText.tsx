import { Box, Tooltip } from "@chakra-ui/react";
import type { AdvisorySeverity, AdvisoryType } from "../api/types";

export const severityToText = (severity?: AdvisorySeverity): string => {
  switch (severity) {
    case "SEVERITY_CRITICAL":
      return "Critical";
    case "SEVERITY_IMPORTANT":
      return "Important";
    case "SEVERITY_MODERATE":
      return "Moderate";
    case "SEVERITY_LOW":
      return "Low";
    default:
      return "None";
  }
};

export const typeToText = (type?: AdvisoryType): string => {
  switch (type) {
    case "TYPE_BUGFIX":
      return "Bug Fix";
    case "TYPE_SECURITY":
      return "Security";
    case "TYPE_ENHANCEMENT":
      return "Enhancement";
    default:
      return "Unknown";
  }
};

export const severityToBadge = (
  severity: AdvisorySeverity | undefined,
  type: AdvisoryType | undefined,
  size: number = 20
): React.ReactNode => {
  const label = `${typeToText(type)}${
    type === "TYPE_SECURITY" ? ` / ${severityToText(severity)}` : ""
  }`;

  const icons: Record<string, React.ReactNode> = {
    SEVERITY_CRITICAL: (
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={`${size}px`}
        height={`${size}px`}
        display="inline-block"
      >
        <g fill="#ED1C24">
          <path d="M22.2 19.2l-8.8-16c-.2-.3-.5-.6-.8-.7-.3-.1-.7-.1-1.1 0-.3.1-.6.4-.8.7l-8.8 16c-.3.5-.2 1 0 1.5.3.5.8.7 1.3.8h17.7c.3 0 .5-.1.8-.2.2-.1.4-.3.5-.6.2-.4.2-1 0-1.5zm-18.8.6L12 4.3l8.6 15.5H3.4z" />
          <path d="M12 15.7c-.2 0-.4.1-.6.2-.2.2-.2.4-.2.6v.8c0 .3.2.6.4.7.3.1.6.1.8 0s.4-.4.4-.7v-.8c0-.2-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2zM11.2 9v5c0 .3.2.6.4.7.3.1.6.1.8 0 .3-.1.4-.4.4-.7V9c0-.3-.2-.6-.4-.7-.3-.1-.6-.1-.8 0s-.4.4-.4.7z" />
        </g>
      </Box>
    ),
    SEVERITY_IMPORTANT: (
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={`${size}px`}
        height={`${size}px`}
        display="inline-block"
      >
        <g fill="#F47B2A">
          <path d="M22.2 19.2l-8.8-16c-.2-.3-.5-.6-.8-.7-.3-.1-.7-.1-1.1 0-.3.1-.6.4-.8.7l-8.8 16c-.3.5-.2 1 0 1.5.3.5.8.7 1.3.8h17.7c.3 0 .5-.1.8-.2.2-.1.4-.3.5-.6.2-.4.2-1 0-1.5zm-18.8.6L12 4.3l8.6 15.5H3.4z" />
          <path d="M12 15.7c-.2 0-.4.1-.6.2-.2.2-.2.4-.2.6v.8c0 .3.2.6.4.7.3.1.6.1.8 0s.4-.4.4-.7v-.8c0-.2-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2zM11.2 9v5c0 .3.2.6.4.7.3.1.6.1.8 0 .3-.1.4-.4.4-.7V9c0-.3-.2-.6-.4-.7-.3-.1-.6-.1-.8 0s-.4.4-.4.7z" />
        </g>
      </Box>
    ),
    SEVERITY_MODERATE: (
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={`${size}px`}
        height={`${size}px`}
        display="inline-block"
      >
        <path
          fill="#ffc31a"
          d="M22.2 19.2l-8.8-16c-.2-.3-.5-.6-.8-.7-.3-.1-.7-.1-1.1 0-.3.1-.6.4-.8.7l-8.8 16c-.3.5-.2 1 0 1.5.3.5.8.7 1.3.8h17.7c.3 0 .5-.1.8-.2.2-.1.4-.3.5-.6.2-.4.2-1 0-1.5zm-18.8.6L12 4.3l8.6 15.5H3.4z"
        />
        <path
          fill="#ffc31a"
          d="M12 15.7c-.2 0-.4.1-.6.2-.2.2-.2.4-.2.6v.8c0 .3.2.6.4.7.3.1.6.1.8 0s.4-.4.4-.7v-.8c0-.2-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2zM11.2 9v5c0 .3.2.6.4.7.3.1.6.1.8 0 .3-.1.4-.4.4-.7V9c0-.3-.2-.6-.4-.7-.3-.1-.6-.1-.8 0s-.4.4-.4.7z"
        />
      </Box>
    ),
    SEVERITY_LOW: (
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={`${size}px`}
        height={`${size}px`}
        display="inline-block"
      >
        <g fill="#39B54A">
          <path d="M22.2 19.2l-8.8-16c-.2-.3-.5-.6-.8-.7-.3-.1-.7-.1-1.1 0-.3.1-.6.4-.8.7l-8.8 16c-.3.5-.2 1 0 1.5.3.5.8.7 1.3.8h17.7c.3 0 .5-.1.8-.2.2-.1.4-.3.5-.6.2-.4.2-1 0-1.5zm-18.8.6L12 4.3l8.6 15.5H3.4z" />
          <path d="M12 15.7c-.2 0-.4.1-.6.2-.2.2-.2.4-.2.6v.8c0 .3.2.6.4.7.3.1.6.1.8 0s.4-.4.4-.7v-.8c0-.2-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2zM11.2 9v5c0 .3.2.6.4.7.3.1.6.1.8 0 .3-.1.4-.4.4-.7V9c0-.3-.2-.6-.4-.7-.3-.1-.6-.1-.8 0s-.4.4-.4.7z" />
        </g>
      </Box>
    ),
    SEVERITY_UNKNOWN: (
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={`${size}px`}
        height={`${size}px`}
        display="inline-block"
      >
        <g fill="#009444">
          <path d="M22 5.6c0-.2 0-.3-.1-.4s-.2-.2-.4-.3L12.3 2h-.5L2.5 4.9c-.1 0-.3.1-.4.2-.1.2-.1.3-.1.5C2 6 1.6 15 6 19.5c.8.8 1.7 1.5 2.8 1.9 1 .4 2.2.6 3.3.6s2.2-.2 3.3-.6c1-.4 2-1.1 2.7-1.9C22.4 14.9 22 5.9 22 5.6zm-5 12.9c-1.3 1.4-3.1 2.1-5 2.1s-3.7-.7-5-2.1C3.6 15 3.4 8 3.4 6.1L12 3.4l8.6 2.7c0 1.9-.2 8.9-3.6 12.4z" />
          <path d="M5.4 7c-.2 0-.3.1-.4.3-.1.1-.1.3-.1.4.1 2.1.6 7.2 3.1 9.8 1 1.1 2.4 1.7 3.9 1.6h.1c1.5 0 2.9-.6 3.9-1.6 2.5-2.6 3-7.7 3.2-9.8 0-.2 0-.3-.1-.4s-.2-.2-.4-.3l-6.4-2h-.4L5.4 7zm12.3 1.2c-.2 2.1-.7 6.3-2.7 8.3-.8.8-1.8 1.2-2.9 1.2H12c-1.1 0-2.1-.4-2.9-1.2-2-2.1-2.5-6.2-2.7-8.3L12 6.5l5.7 1.7z" />
          <path d="M8.9 12.5l1.4 2.1c.1.2.3.3.6.3.2 0 .4-.1.5-.3l3.6-4.3c.2-.2.2-.5.1-.7-.1-.2-.3-.4-.5-.5-.3 0-.5.1-.7.2L11 13l-.9-1.3c-.1-.2-.3-.3-.5-.3s-.4 0-.6.1c-.2.1-.3.3-.3.5 0 .1.1.3.2.5z" />
        </g>
      </Box>
    ),
  };

  return (
    <Tooltip label={label} placement="top-start" hasArrow>
      {icons[severity ?? "SEVERITY_UNKNOWN"]}
    </Tooltip>
  );
};
