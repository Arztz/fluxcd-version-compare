import NavBar from "@/components/NavBar";
import Table from "@/components/Table";
import TabTable from "@/components/TabTable";
import Image from "next/image";
import fs  from 'fs'
import { DataProps } from "@/types";
import { fetchData } from "@/utils";


export default async function Home() {
  // const fetchData = JSON.parse(fs.readFileSync('./public/version.json','utf-8'))
  const data = await fetchData()
  // console.log(fetchData)
  return (
    <>
      <NavBar />
      
          <div className='flex justify-center'>
            <div className="artboard artboard-horizontal phone-3 ">
              <div role="tablist" className="tabs tabs-lifted">
                { data?.map((data,index)=>(
                  <TabTable data={data} index={index}/>
                ))}
              </div>
            </div>
        </div>
      
    </>
  );
}
