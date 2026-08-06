import { QueryClientProvider } from "@tanstack/react-query"
import { queryClientInstance } from "@/lib/query-client"
import PageNotFound from "@/lib/PageNotFound"
import ScrollToTop from "@/components/ScrollToTop"
import Layout from "@/components/site/Layout"
import Home from "@/pages/Home"
import Work from "@/pages/Work"
import Services from "@/pages/Services"
import Pricing from "@/pages/Pricing"
import Contact from "@/pages/Contact"
import SIS from "@/pages/SIS"
import Blog from "@/pages/Blog"

const routes = {
  "/": Home,
  "/work": Work,
  "/services": Services,
  "/pricing": Pricing,
  "/contact": Contact,
  "/systems/sis": SIS,
  "/blog": Blog,
}

function App() {
  const Page = routes[window.location.pathname] || PageNotFound

  return (
    <QueryClientProvider client={queryClientInstance}>
      <ScrollToTop />
      <Layout>
        <Page />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
