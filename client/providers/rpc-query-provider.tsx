import { hc } from 'hono/client';
import { createContext, useContext, type PropsWithChildren } from 'react';
import type { AppType } from '../../server/app';

type RpcQueryProviderValue = ReturnType<typeof hc<AppType>> | null;

const RpcQueryContext = createContext<RpcQueryProviderValue>(null);

const client = hc<AppType>('http://localhost:3000');

export function RpcQueryProvider({ children }: PropsWithChildren) {
	return <RpcQueryContext.Provider value={client}>{children}</RpcQueryContext.Provider>;
}

export function useRpcQueryClient() {
	const client = useContext(RpcQueryContext);
	if (!client) {
		throw new Error('useRpcQueryClient must be used within a RpcQueryProvider');
	}
	return client;
}
