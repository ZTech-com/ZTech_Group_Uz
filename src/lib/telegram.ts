import { TELEGRAM } from "@/lib/constants";

export type ProjectRequest = {
  name: string;
  telegram: string;
  phone: string;
  service: string;
  project: string;
};

export function buildProjectRequestMessage(data: ProjectRequest): string {
  return [
    "ZTech Group Project Request",
    "",
    `Name: ${data.name}`,
    `Telegram: ${data.telegram}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    `Project: ${data.project}`,
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
