import Hero from "./components/hero/hero"
import ServiceList from "./components/serviceList/serviceList"
import Section8 from "./components/panoram/panoram"
import Pros from "./components/pros/pros"
import Processes from "./components/processes/processes"
import Blog from "./components/blog/blog"
import FormSection from "./components/formSection/formSection"

export default function Home() {
  return (
    <main className=" flex flex-col flex-auto">
      <Hero/>
      <ServiceList/>
      <Section8/>
      <Pros/>
      <Processes/>
      <Blog/>
      <FormSection/>
    </main>
  )
}
