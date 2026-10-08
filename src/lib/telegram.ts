import { TELEGRAM } from "@/lib/constants";

export type ProjectRequest = {
  name: string;
  telegram: string;
  phone: string;
  service: string;
  project: string;
};

type MessageLabels = {
  header: string;
  name: string;
  telegram: string;
  phone: string;
  service: string;
  project: string;
};

export function buildProjectRequestMessage(
  data: ProjectRequest,
  labels: MessageLabels,
): string {
  return [
    labels.header,
    "",
    `${labels.name}: ${data.name}`,
    `${labels.telegram}: ${data.telegram}`,
    `${labels.phone}: ${data.phone}`,
    `${labels.service}: ${data.service}`,
    `${labels.project}: ${data.project}`,
  ].join("\n");
}

export function buildTelegramDeepLink(username: string, message?: string): string {
  const base = `https://t.me/${username}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function openTelegramWithMessage(message: string, username: string = TELEGRAM.group.username) {
  const url = buildTelegramDeepLink(username, message);
  window.open(url, "_blank", "noopener,noreferrer");
}
