import React from "react";
import type { Thing, WithContext } from "schema-dts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function JsonLd({ schema }: { schema: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
