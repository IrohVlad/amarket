import Hero from "./components/hero/hero"
import ServiceList from "./components/serviceList/serviceList"

export default function Home() {
  return (
    <main className=" flex flex-col flex-auto">
      <Hero/>
      <ServiceList/>
    </main>
  )
}
