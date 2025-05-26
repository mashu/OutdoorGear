import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Preconnect for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Enhanced Font Loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
        {/* Meta tags for better SEO and experience */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="OutdoorGearEU" />
        
        {/* Favicon and touch icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
      </Head>
      <body className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 antialiased">
        {/* Loading Screen */}
        <div id="loading-screen" className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 z-50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold">OutdoorGearEU</h2>
            <p className="text-blue-200">Loading outdoor excellence...</p>
          </div>
        </div>
        
        <Main />
        <NextScript />
        
        {/* Script to hide loading screen */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                const loadingScreen = document.getElementById('loading-screen');
                if (loadingScreen) {
                  loadingScreen.style.opacity = '0';
                  loadingScreen.style.transition = 'opacity 0.5s ease-out';
                  setTimeout(() => {
                    loadingScreen.style.display = 'none';
                  }, 500);
                }
              });
            `,
          }}
        />
      </body>
    </Html>
  );
}
