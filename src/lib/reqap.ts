import to from "await-to-js";

export interface GrpcError {
  code: number;
  error: string;
  message: string;
  status: number;
}

export function reqap<T, U = GrpcError>(
  run: () => Promise<void | T>
): Promise<[U | null, void | T | undefined]> {
  return to(
    run().catch((e) => {
      if (!e.status && e.type !== "opaqueredirect") {
        return;
      }

      const invalidStatuses = [302, 401];

      if (invalidStatuses.includes(e.status) || e.type === "opaqueredirect") {
        window.location.reload();
        return;
      }

      throw e.json();
    })
  );
}
