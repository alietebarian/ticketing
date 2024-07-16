import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { SidebarProvider } from './Context';
import MainPage from '../MainPage';
import SIdeBar from './SIdeBar';

export default function HomePage() {
    const queryClient = new QueryClient();
  return (
    <SidebarProvider>
      <QueryClientProvider client={queryClient}>
        <div className="p-1.5 flex">
          <SIdeBar />
          <MainPage />
        </div>
      </QueryClientProvider>
    </SidebarProvider>
  );
}
