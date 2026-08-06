import { QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/systems/sis" element={<SIS />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App