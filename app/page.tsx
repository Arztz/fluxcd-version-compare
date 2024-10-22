import NavBar from "@/components/NavBar";
import Table from "@/components/Table";
import TabTable from "@/components/TabTable";
import Image from "next/image";
import fs  from 'fs'
import { DataProps } from "@/types";
import { fetchData } from "@/utils";

export default async function Home() {
  // const fetchData = JSON.parse(fs.readFileSync('./public/version.json','utf-8'))
  const fdata = await fetchData()
  // console.log("fetchData")

  return (
    <>
      <NavBar />
          <div className='flex justify-center text-lg'>
            <div className="artboard artboard-horizontal phone-3 ">
              <div role="tablist" className="tabs tabs-lifted">
                { fdata?.map((data:DataProps,index:number)=>(
                  <TabTable data={data} index={index} key={data.project}/>
                ))}
              </div>
            </div>
        </div>
    </>
  );
}
