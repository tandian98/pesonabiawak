import { useRoutes } from "react-router-dom"
import { Suspense } from "react"
import routes from "./routes"
import { Toaster } from "sonner"
import ScrollToTop from "./components/scrollTop"

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes)

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          }
        >
          <ScrollToTop />
          {element}
        </Suspense>
      </main>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
      <Toaster richColors position="top-right" className="fixed z-[9999]" />
    </>
  )
}

export default App
