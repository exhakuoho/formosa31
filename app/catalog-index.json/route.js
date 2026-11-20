import { cards } from "@/lib/list-fields";
export const dynamic = "force-static";
export function GET() { return Response.json(cards); }
