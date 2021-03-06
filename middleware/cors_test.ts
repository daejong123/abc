import type { Context } from "../context.ts";

import { assertEquals } from "../vendor/https/deno.land/std/testing/asserts.ts";
import { cors } from "./cors.ts";
import { Header } from "../constants.ts";
const { test } = Deno;

test("middleware cors", function (): void {
  const headers = new Headers();
  const ctx = {
    request: {
      headers,
    },
    response: {
      headers,
    },
  } as Context;
  cors()((c) => c)(ctx);
  assertEquals(headers.get(Header.Vary), Header.Origin);
  assertEquals(headers.get(Header.AccessControlAllowOrigin), "*");
});
