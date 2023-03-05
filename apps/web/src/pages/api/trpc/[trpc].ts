import { appRouter, createTRPCContext } from '@informatyzacja/api';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});
