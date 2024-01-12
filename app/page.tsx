import Hero from "./homePage/hero/hero"
import ServiceList from "./homePage/serviceList/serviceList"
import Panoram from "./homePage/panoram/panoram"
import Pros from "./homePage/pros/pros"
import Processes from "./homePage/processes/processes"
import Blog from "./homePage/blog/blog"
import FormSection from "./homePage/formSection/formSection"

export default function Home() {
  return (
    <main className=" flex flex-col flex-auto text-white">
      <Hero/>
      <ServiceList/>
      <Panoram/>
      <Pros/>
      <Processes/>
      <Blog/>
      <FormSection/>
    </main>
  )
}
