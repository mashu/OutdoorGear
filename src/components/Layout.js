import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      
      <Header />
      
      <main className="flex-grow relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-transparent rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200 to-transparent rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-green-200 to-transparent rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
