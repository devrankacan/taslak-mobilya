export const ADMIN_COOKIE_NAME = "lonca_admin_session";

function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "lonca2026";
}

function getAdminSecret(): string {
  return process.env.ADMIN_SECRET || "lonca-mobilya-demo-secret";
}

export async function getSessionToken(): Promise<string> {
  const data = new TextEncoder().encode(`${getAdminPassword()}:${getAdminSecret()}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function checkPassword(password: string): boolean {
  return password === getAdminPassword();
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  return token === (await getSessionToken());
}
